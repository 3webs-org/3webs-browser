import urlParser from './util/urlParser.js'
import searchEngine from './util/searchEngine.js'
import statistics from './statistics.js'

/* common actions that affect different parts of the UI (webviews, tabstrip, etc) */

import settings from './util/settings/settings.js'
import webviews from './webviews.js'
import focusMode from './focusMode.js'
import tabBar from './navbar/tabBar.js'
import tabEditor from './navbar/tabEditor.js'
import searchbar from './searchbar/searchbar.js'

import { getTabs, getTasks } from './tabState.js'

/* creates a new task */

function addTask () {
  getTasks().setSelected(getTasks().add())

  tabBar.updateAll()
  addTab()
}

/* creates a new tab */

/*
options
  options.enterEditMode - whether to enter editing mode when the tab is created. Defaults to true.
  options.openInBackground - whether to open the tab without switching to it. Defaults to false.
*/
function addTab (tabId = getTabs().add(), options = {}) {
  /*
  adding a new tab should destroy the current one if either:
  * The current tab is an empty, non-private tab, and the new tab is private
  * The current tab is empty, and the new tab has a URL
  */

  if (!options.openInBackground && !getTabs().get(getTabs().getSelected()).url && ((!getTabs().get(getTabs().getSelected()).private && getTabs().get(tabId).private) || getTabs().get(tabId).url)) {
    destroyTab(getTabs().getSelected())
  }

  tabBar.addTab(tabId)
  webviews.add(tabId)

  if (!options.openInBackground) {
    switchToTab(tabId, {
      focusWebview: options.enterEditMode === false
    })
    if (options.enterEditMode !== false) {
      tabEditor.show(tabId)
    }
  } else {
    tabBar.getTab(tabId).scrollIntoView()
  }
}

function moveTabLeft (tabId = getTabs().getSelected()) {
  getTabs().moveBy(tabId, -1)
  tabBar.updateAll()
}

function moveTabRight (tabId = getTabs().getSelected()) {
  getTabs().moveBy(tabId, 1)
  tabBar.updateAll()
}

/* destroys a task object and the associated webviews */

function destroyTask (id) {
  var task = getTasks().get(id)

  task.tabs.forEach(function (tab) {
    webviews.destroy(tab.id)
  })

  getTasks().destroy(id)
}

/* destroys the webview and tab element for a tab */
function destroyTab (id) {
  tabBar.removeTab(id)
  getTabs().destroy(id) // remove from state - returns the index of the destroyed tab
  webviews.destroy(id) // remove the webview
}

/* destroys a task, and either switches to the next most-recent task or creates a new one */

function closeTask (taskId) {
  var previousCurrentTask = getTasks().getSelected().id

  destroyTask(taskId)

  if (taskId === previousCurrentTask) {
    // the current task was destroyed, find another task to switch to

    if (getTasks().getLength() === 0) {
      // there are no tasks left, create a new one
      return addTask()
    } else {
      // switch to the most-recent task

      var recentTaskList = getTasks().map(function (task) {
        return { id: task.id, lastActivity: getTasks().getLastActivity(task.id) }
      })

      const mostRecent = recentTaskList.reduce(
        (latest, current) => current.lastActivity > latest.lastActivity ? current : latest
      )

      return switchToTask(mostRecent.id)
    }
  }
}

/* destroys a tab, and either switches to the next tab or creates a new one */

function closeTab (tabId) {
  /* disabled in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn()
    return
  }

  if (tabId === getTabs().getSelected()) {
    var currentIndex = getTabs().getIndex(getTabs().getSelected())
    var nextTab =
    getTabs().getAtIndex(currentIndex - 1) || getTabs().getAtIndex(currentIndex + 1)

    destroyTab(tabId)

    if (nextTab) {
      switchToTab(nextTab.id)
    } else {
      addTab()
    }
  } else {
    destroyTab(tabId)
  }
}

/* changes the currently-selected task and updates the UI */

function switchToTask (id) {
  getTasks().setSelected(id)

  tabBar.updateAll()

  var taskData = getTasks().get(id)

  if (taskData.tabs.count() > 0) {
    var selectedTab = taskData.tabs.getSelected()

    // if the task has no tab that is selected, switch to the most recent one

    if (!selectedTab) {
      selectedTab = taskData.tabs.get().sort(function (a, b) {
        return b.lastActivity - a.lastActivity
      })[0].id
    }

    switchToTab(selectedTab)
  } else {
    addTab()
  }
}

/* switches to a tab - update the webview, state, tabstrip, etc. */

function switchToTab (id, options) {
  options = options || {}

  tabEditor.hide()

  getTabs().setSelected(id)
  tabBar.setActiveTab(id)
  webviews.setSelected(id, {
    focus: options.focusWebview !== false
  })
  if (!getTabs().get(id).url) {
    document.body.classList.add('is-ntp')
  } else {
    document.body.classList.remove('is-ntp')
  }
}

getTasks().on('tab-updated', function (id, key) {
  if (key === 'url' && id === getTabs().getSelected()) {
    document.body.classList.remove('is-ntp')
  }
})

webviews.bindEvent('did-create-popup', function (tabId, popupId, initialURL) {
  var popupTab = getTabs().add({
    // in most cases, initialURL will be overwritten once the popup loads, but if the URL is a downloaded file, it will remain the same
    url: initialURL,
    private: getTabs().get(tabId).private
  })
  tabBar.addTab(popupTab)
  webviews.add(popupTab, popupId)
  switchToTab(popupTab)
})

webviews.bindEvent('new-tab', function (tabId, url, openInForeground) {
  var newTab = getTabs().add({
    url: url,
    private: getTabs().get(tabId).private // inherit private status from the current tab
  })

  addTab(newTab, {
    enterEditMode: false,
    openInBackground: !settings.get('openTabsInForeground') && !openInForeground
  })
})

webviews.bindIPC('close-window', function (tabId, args) {
  closeTab(tabId)
})

ipc.on('set-file-view', function (e, data) {
  getTabs().get().forEach(function (tab) {
    if (tab.url === data.url) {
      getTabs().update(tab.id, { isFileView: data.isFileView })
    }
  })
})

searchbar.events.on('url-selected', function (data) {
  var searchbarQuery = searchEngine.getSearch(urlParser.parse(data.url))
  if (searchbarQuery) {
    statistics.incrementValue('searchCounts.' + searchbarQuery.engine)
  }

  if (data.background) {
    var newTab = getTabs().add({
      url: data.url,
      private: getTabs().get(getTabs().getSelected()).private
    })
    addTab(newTab, {
      enterEditMode: false,
      openInBackground: true
    })
  } else {
    webviews.update(getTabs().getSelected(), data.url)
    tabEditor.hide()
  }
})

tabBar.events.on('tab-selected', function (id) {
  switchToTab(id)
})

tabBar.events.on('tab-closed', function (id) {
  closeTab(id)
})

export default {
  addTask,
  addTab,
  destroyTask,
  destroyTab,
  closeTask,
  closeTab,
  switchToTask,
  switchToTab,
  moveTabLeft,
  moveTabRight
}

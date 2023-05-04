const fs = require('fs')
const os = require('os')

import browserUI from './browserUI.js'
import webviews from './webviews.js'
import tabEditor from './navbar/tabEditor.js'
import { getTasks, initialize as initializeTabState } from './tabState.js'
import settings from './util/settings/settings.js'

let userDataPath = undefined;

if (os.platform() === 'darwin') {
  userDataPath = os.homedir() + '/Library/Application Support/3WebsBrowser'
} else if (os.platform() === 'win32') {
  userDataPath = process.env.APPDATA + '\\3WebsBrowser'
} else {
  userDataPath = os.homedir() + '/.config/3WebsBrowser'
}

console.log('userDataPath', userDataPath)

const sessionRestore = {
  savePath: userDataPath + (platformType === 'windows' ? '\\sessionRestore.json' : '/sessionRestore.json'),
  previousState: null,
  save: function (forceSave, sync) {
    var stateString = JSON.stringify(getTasks().getStringifyableState())
    var data = {
      version: 2,
      state: JSON.parse(stateString),
      saveTime: Date.now()
    }

    // save all tabs that aren't private

    for (var i = 0; i < data.state.tasks.length; i++) {
      data.state.tasks[i].tabs = data.state.tasks[i].tabs.filter(function (tab) {
        return !tab.private
      })
    }

    //if startupTabOption is "open a new blank task", don't save any tabs in the current task
    if (settings.get('startupTabOption') === 3) {
      for (var i = 0; i < data.state.tasks.length; i++) {
        if (data.state.tasks[i].id === data.state.selectedTask) {
          data.state.tasks[i].tabs = []
        }
      }
    }

    if (forceSave === true || stateString !== sessionRestore.previousState) {
      if (sync === true) {
        fs.writeFileSync(sessionRestore.savePath, JSON.stringify(data))
      } else {
        fs.writeFile(sessionRestore.savePath, JSON.stringify(data), function (err) {
          if (err) {
            console.warn(err)
          }
        })
      }
      sessionRestore.previousState = stateString
    }
  },
  restore: function () {
    var savedStringData
    try {
      savedStringData = fs.readFileSync(sessionRestore.savePath, 'utf-8')
    } catch (e) {
      console.warn('failed to read session restore data', e)
    }

    var startupConfigOption = settings.get('startupTabOption') || 2
    /*
    1 - reopen last task
    2 - open new task, keep old tabs in background
    3 - discard old tabs and open new task
    */

    /*
    Disabled - show a user survey on startup
    // the survey should only be shown after an upgrade from an earlier version
    var shouldShowSurvey = false
    if (savedStringData && !localStorage.getItem('1.15survey')) {
      shouldShowSurvey = true
    }
    localStorage.setItem('1.15survey', 'true')
    */

    try {
      // first run, show the tour
      if (!savedStringData) {
        getTasks().setSelected(getTasks().add()) // create a new task
        
        return // TODO - Create a new tour page
        var newTab = tasks.getSelected().tabs.add({
          url: 'https://minbrowser.github.io/min/tour'
        })
        browserUI.addTab(newTab, {
          enterEditMode: false
        })
        return
      }

      var data = JSON.parse(savedStringData)

      // the data isn't restorable
      if ((data.version && data.version !== 2) || (data.state && data.state.tasks && data.state.tasks.length === 0)) {
        getTasks().setSelected(getTasks().add())

        browserUI.addTab(getTasks().getSelected().tabs.add())
        return
      }

      // add the saved tasks

      data.state.tasks.forEach(function (task) {
        // restore the task item
        getTasks().add(task)

        /*
        If the task contained only private tabs, none of the tabs will be contained in the session restore data, but tasks must always have at least 1 tab, so create a new empty tab if the task doesn't have any.
        */
        if (task.tabs.length === 0) {
          getTasks().get(task.id).tabs.add()
        }
      })
      getTasks().setSelected(data.state.selectedTask)

      // switch to the previously selected tasks

      if (getTasks().getSelected().tabs.isEmpty() || startupConfigOption === 1) {
        browserUI.switchToTask(data.state.selectedTask)
        if (getTasks().getSelected().tabs.isEmpty()) {
          tabEditor.show(getTasks().getSelected().tabs.getSelected())
        }
      } else {
        window.createdNewTaskOnStartup = true
        // try to reuse a previous empty task
        var lastTask = getTasks().byIndex(getTasks().getLength() - 1)
        if (lastTask && lastTask.tabs.isEmpty() && !lastTask.name) {
          browserUI.switchToTask(lastTask.id)
          tabEditor.show(lastTask.tabs.getSelected())
        } else {
          browserUI.addTask()
        }
      }

      /* Disabled - show user survey
      // if this isn't the first run, and the survey popup hasn't been shown yet, show it
      if (shouldShowSurvey) {
        fetch('https://minbrowser.org/survey/survey15.json').then(function (response) {
          return response.json()
        }).then(function (data) {
          setTimeout(function () {
            if (data.available && data.url) {
              if (tasks.getSelected().tabs.isEmpty()) {
                webviews.update(tasks.getSelected().tabs.getSelected(), data.url)
                tabEditor.hide()
              } else {
                var surveyTab = tasks.getSelected().tabs.add({
                  url: data.url
                })
                browserUI.addTab(surveyTab, {
                  enterEditMode: false
                })
              }
            }
          }, 200)
        })
      }
      */
    } catch (e) {
      // an error occured while restoring the session data

      console.error('restoring session failed: ', e)

      var backupSavePath = require('path').join(userDataPath, 'sessionRestoreBackup-' + Date.now() + '.json')

      fs.writeFileSync(backupSavePath, savedStringData)

      // destroy any tabs that were created during the restore attempt
      initializeTabState()

      // create a new tab with an explanation of what happened
      var newTask = getTasks().add()
      var newSessionErrorTab = getTasks().get(newTask).tabs.add({
        url: 'file://' + __dirname + '/pages/sessionRestoreError/index.html?backupLoc=' + encodeURIComponent(backupSavePath)
      })

      browserUI.switchToTask(newTask)
      browserUI.switchToTab(newSessionErrorTab)
    }
  },
  initialize: function () {
    setInterval(sessionRestore.save, 30000)

    window.onbeforeunload = function (e) {
      sessionRestore.save(true, true)
    }
  }
}

export default sessionRestore

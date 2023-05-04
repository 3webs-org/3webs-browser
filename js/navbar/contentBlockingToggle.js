import { l } from '../../localization/localizationHelpers.js'

import webviews from '../webviews.js'
import settings from '../util/settings/settings.js'
import remoteMenuRenderer from '../remoteMenuRenderer.js'

const contentBlockingToggle = {
  enableBlocking: function (url) {
    if (!url) {
      return
    }
    var domain = new URL(url).hostname

    var setting = settings.get('filtering')
    if (!setting) {
      setting = {}
    }
    if (!setting.exceptionDomains) {
      setting.exceptionDomains = []
    }
    setting.exceptionDomains = setting.exceptionDomains.filter(d => d.replace(/^www\./g, '') !== domain.replace(/^www\./g, ''))
    settings.set('filtering', setting)
    webviews.callAsync(getTabs().getSelected(), 'reload')
  },
  disableBlocking: function (url) {
    if (!url) {
      return
    }
    var domain = new URL(url).hostname

    var setting = settings.get('filtering')
    if (!setting) {
      setting = {}
    }
    if (!setting.exceptionDomains) {
      setting.exceptionDomains = []
    }
    // make sure the domain isn't already an exception
    if (!setting.exceptionDomains.some(d => d.replace(/^www\./g, '') === domain.replace(/^www\./g, ''))) {
      setting.exceptionDomains.push(domain)
    }
    settings.set('filtering', setting)
    webviews.callAsync(getTabs().getSelected(), 'reload')
  },
  isBlockingEnabled: function (url) {
    try {
      var domain = new URL(url).hostname
    } catch (e) {
      return false
    }

    var setting = settings.get('filtering')
    return !setting || !setting.exceptionDomains || !setting.exceptionDomains.some(d => d.replace(/^www\./g, '') === domain.replace(/^www\./g, ''))
  },
  create: function () {
    const button = document.createElement('button')
    button.className = 'tab-editor-button i carbon:manage-protection'

    button.addEventListener('click', function (e) {
      contentBlockingToggle.showMenu(button)
    })

    return button
  },
  showMenu: function (button) {
    var url = getTabs().get(getTabs().getSelected()).url
    var menu = [
      [
        {
          type: 'checkbox',
          label: l('enableBlocking'),
          checked: contentBlockingToggle.isBlockingEnabled(url),
          click: function () {
            if (contentBlockingToggle.isBlockingEnabled(url)) {
              contentBlockingToggle.disableBlocking(url)
            } else {
              contentBlockingToggle.enableBlocking(url)
            }
            contentBlockingToggle.update(getTabs().getSelected(), button)
          }
        }
      ],
      [
        {
          label: l('appMenuReportBug'),
          click: function () {
            var newTab = getTabs().add({ url: 'https://github.com/3webs-org/3webs-browser/issues/new?title=Content%20blocking%20issue%20on%20' + encodeURIComponent(url) })
            require('browserUI.js').addTab(newTab, { enterEditMode: false })
          }
        }
      ]
    ]
    remoteMenuRenderer.open(menu)
  },
  update: function (tabId, button) {
    if (!getTabs().get(tabId).url.startsWith('http') && !getTabs().get(tabId).url.startsWith('https')) {
      button.hidden = true
      return
    }

    if (settings.get('filtering') && settings.get('filtering').blockingLevel === 0) {
      button.hidden = true
      return
    }

    button.hidden = false
    if (contentBlockingToggle.isBlockingEnabled(getTabs().get(tabId).url)) {
      button.style.opacity = 1
    } else {
      button.style.opacity = 0.4
    }
  }
}

export default contentBlockingToggle

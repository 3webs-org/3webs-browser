const { ipcRenderer } = require('electron') // Because electron is stupid and doesn't like being imported

import keybindings from '../keybindings.js'
import settings from '../util/settings/settings.js'

var menuButton = document.getElementById('menu-button')

function showSecondaryMenu () {
  var navbar = document.getElementById('navbar')
  var rect = menuButton.getBoundingClientRect()
  var navbarRect = navbar.getBoundingClientRect()

  ipcRenderer.send('showSecondaryMenu', {
    x: Math.round(rect.left),
    y: Math.round(navbarRect.bottom)
  })
}

function initialize () {
  menuButton.addEventListener('click', function (e) {
    showSecondaryMenu()
  })

  keybindings.defineShortcut('showMenu', function () {
    if (!settings.get('useSeparateTitlebar') && (window.platformType === 'windows' || window.platformType === 'linux')) { showSecondaryMenu() }
  })
}

export { initialize, showSecondaryMenu }

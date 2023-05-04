window.globalArgs = {}

process.argv.forEach(function (arg) {
  if (arg.startsWith('--.js')) {
    var key = arg.split('=')[0].replace('--', '')
    var value = arg.split('=')[1]
    globalArgs[key] = value
  }
})

window.electron = require('electron')
window.fs = require('fs')
window.EventEmitter = require('events')
window.ipc = electron.ipcRenderer

if (navigator.platform === 'MacIntel') {
  document.body.classList.add('mac')
  window.platformType = 'mac'
} else if (navigator.platform === 'Win32') {
  document.body.classList.add('windows')
  window.platformType = 'windows'
} else {
  document.body.classList.add('linux')
  window.platformType = 'linux'
}

if (navigator.maxTouchPoints > 0) {
  document.body.classList.add('touch')
}

/* add classes so that the window state can be used in CSS */
ipc.on('enter-full-screen', function () {
  document.body.classList.add('fullscreen')
})

ipc.on('leave-full-screen', function () {
  document.body.classList.remove('fullscreen')
})

ipc.on('maximize', function () {
  document.body.classList.add('maximized')
})

ipc.on('unmaximize', function () {
  document.body.classList.remove('maximized')
})

// https://remysharp.com/2010/07/21/throttling-function-calls

window.throttle = function (fn, threshhold, scope) {
  threshhold || (threshhold = 250)
  var last,
    deferTimer
  return function () {
    var context = scope || this

    var now = +new Date()
    var args = arguments
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

// https://remysharp.com/2010/07/21/throttling-function-calls

window.debounce = function (fn, delay) {
  var timer = null
  return function () {
    var context = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

window.empty = function (node) {
  var n
  while (n = node.firstElementChild) {
    node.removeChild(n)
  }
}

/* prevent a click event from firing after dragging the window */

window.addEventListener('load', function () {
  var isMouseDown = false
  var isDragging = false
  var distance = 0

  document.body.addEventListener('mousedown', function () {
    isMouseDown = true
    isDragging = false
    distance = 0
  })

  document.body.addEventListener('mouseup', function () {
    isMouseDown = false
  })

  var dragHandles = document.getElementsByClassName('windowDragHandle')

  for (var i = 0; i < dragHandles.length; i++) {
    dragHandles[i].addEventListener('mousemove', function (e) {
      if (isMouseDown) {
        isDragging = true
        distance += Math.abs(e.movementX) + Math.abs(e.movementY)
      }
    })
  }

  document.body.addEventListener('click', function (e) {
    if (isDragging && distance >= 10.0) {
      e.stopImmediatePropagation()
      isDragging = false
    }
  }, true)
})

async function initialize(moduleNames) {
  return await Promise.all(moduleNames.map(async (moduleName) => {
    try {
      const theModule = await import(moduleName)
      const initialize = theModule.initialize || theModule.default.initialize
      console.log('Loaded module', moduleName)
      let ret = initialize()
      if (ret instanceof Promise) {
        ret = await ret
      }
      console.log('Initialized module', moduleName)
      return ret
    } catch (e) {
      console.error('Failed to initialize module', moduleName, e)
    }
  }))
}

await initialize([
  './tabState.js',
  './windowControls.js',
  './navbar/menuButton.js',
//])
//await initialize([
  './navbar/addTabButton.js',
  './navbar/tabActivity.js',
  './navbar/tabColor.js',
  './navbar/navigationButtons.js',
  './downloadManager.js',
  './webviewMenu.js',
  './contextMenu.js',
  './menuRenderer.js',
  './defaultKeybindings.js',
  './pdfViewer.js',
  './autofillSetup.js',
 './passwordManager/passwordManager.js',
 './passwordManager/passwordCapture.js',
 './passwordManager/passwordViewer.js',
  './util/theme.js',
  './userscripts.js',
  './statistics.js',
  './taskOverlay/taskOverlay.js',
  './pageTranslations.js',
  './sessionRestore.js',
  './bookmarkConverter.js',
  './newTabPage.js',
  './macHandoff.js',
//])
//
// default searchbar plugins
//await initialize([
  './searchbar/placesPlugin.js',
  './searchbar/instantAnswerPlugin.js',
  './searchbar/openTabsPlugin.js',
  './searchbar/bangsPlugin.js',
  './searchbar/customBangs.js',
  './searchbar/searchSuggestionsPlugin.js',
  './searchbar/placeSuggestionsPlugin.js',
  './searchbar/updateNotifications.js',
  './searchbar/restoreTaskPlugin.js',
  './searchbar/bookmarkManager.js',
  './searchbar/historyViewer.js',
  './searchbar/developmentModeNotification.js',
  './searchbar/shortcutButtons.js',
  './searchbar/calculatorPlugin.js',
])

// once everything's loaded, start the session
let sessionRestorePlugin = (await import('./sessionRestore.js')).default
sessionRestorePlugin.restore()

// Fixes a strange UI bug
setTimeout(() => {
  // Get the first text node in the document
  let node = document.body.firstChild
  // Delete it
  document.body.removeChild(node)
}, 100)
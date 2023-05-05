/* Handles messages that get sent from the menu bar in the main process */
const { ipcRenderer: ipc } = require('electron')

import webviews from './webviews.js'
import webviewGestures from './webviewGestures.js'
import browserUI from './browserUI.js'
import focusMode from './focusMode.js'
import modalMode from './modalMode.js'
import findinpage from './findinpage.js'
import PDFViewer from './pdfViewer.js'
import tabEditor from './navbar/tabEditor.js'
import readerView from './readerView.js'
import taskOverlay from './taskOverlay/taskOverlay.js'

import { getTabs } from './tabState.js'

export default {
  initialize: function () {
    ipc.on('zoomIn', function () {
      webviewGestures.zoomWebviewIn(getTabs().getSelected())
    })

    ipc.on('zoomOut', function () {
      webviewGestures.zoomWebviewOut(getTabs().getSelected())
    })

    ipc.on('zoomReset', function () {
      webviewGestures.resetWebviewZoom(getTabs().getSelected())
    })

    ipc.on('print', function () {
      if (PDFViewer.isPDFViewer(getTabs().getSelected())) {
        PDFViewer.printPDF(getTabs().getSelected())
      } else if (readerView.isReader(getTabs().getSelected())) {
        readerView.printArticle(getTabs().getSelected())
      } else if (webviews.placeholderRequests.length === 0) {
        // work around #1281 - calling print() when the view is hidden crashes on Linux in Electron 12
        // TODO figure out why webContents.print() doesn't work in Electron 4
        webviews.callAsync(getTabs().getSelected(), 'executeJavaScript', 'window.print()')
      }
    })

    ipc.on('findInPage', function () {
      /* Page search is not available in modal mode. */
      if (modalMode.enabled()) {
        return
      }

      findinpage.start()
    })

    ipc.on('inspectPage', function () {
      webviews.callAsync(getTabs().getSelected(), 'toggleDevTools')
    })

    ipc.on('openEditor', function () {
      tabEditor.show(getTabs().getSelected())
    })

    ipc.on('showBookmarks', function () {
      tabEditor.show(getTabs().getSelected(), '!bookmarks ')
    })

    ipc.on('showHistory', function () {
      tabEditor.show(getTabs().getSelected(), '!history ')
    })

    ipc.on('duplicateTab', function (e) {
      if (modalMode.enabled()) {
        return
      }

      if (focusMode.enabled()) {
        focusMode.warn()
        return
      }

      browserUI.duplicateTab(getTabs().getSelected())
    })

    ipc.on('addTab', function (e, data) {
      /* new tabs can't be created in modal mode */
      if (modalMode.enabled()) {
        return
      }

      /* new tabs can't be created in focus mode */
      if (focusMode.enabled()) {
        focusMode.warn()
        return
      }

      var newTab = getTabs().add({
        url: data.url || ''
      })

      browserUI.addTab(newTab, {
        enterEditMode: !data.url // only enter edit mode if the new tab is empty
      })
    })

    ipc.on('saveCurrentPage', async function () {
      var currentTab = getTabs().get(getTabs().getSelected())

      // new tabs cannot be saved
      if (!currentTab.url) {
        return
      }

      // if the current tab is a PDF, let the PDF viewer handle saving the document
      if (PDFViewer.isPDFViewer(getTabs().getSelected())) {
        PDFViewer.savePDF(getTabs().getSelected())
        return
      }

      if (getTabs().get(getTabs().getSelected()).isFileView) {
        webviews.callAsync(getTabs().getSelected(), 'downloadURL', [getTabs().get(getTabs().getSelected()).url])
      } else {
        var savePath = await ipc.invoke('showSaveDialog', {
          defaultPath: currentTab.title.replace(/[/\\]/g, '_')
        })

        // savePath will be undefined if the save dialog is canceled
        if (savePath) {
          if (!savePath.endsWith('.html')) {
            savePath = savePath + '.html'
          }
          webviews.callAsync(getTabs().getSelected(), 'savePage', [savePath, 'HTMLComplete'])
        }
      }
    })

    ipc.on('addPrivateTab', function () {
      /* new tabs can't be created in modal mode */
      if (modalMode.enabled()) {
        return
      }

      /* new tabs can't be created in focus mode */
      if (focusMode.enabled()) {
        focusMode.warn()
        return
      }

      browserUI.addTab(getTabs().add({
        private: true
      }))
    })

    ipc.on('toggleTaskOverlay', function () {
      taskOverlay.toggle()
    })

    ipc.on('goBack', function () {
      webviews.callAsync(getTabs().getSelected(), 'goBack')
    })

    ipc.on('goForward', function () {
      webviews.callAsync(getTabs().getSelected(), 'goForward')
    })
  }
}

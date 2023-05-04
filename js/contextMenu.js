import remoteMenu from './remoteMenuRenderer.js'
import searchbar from './searchbar/searchbar.js'

import { l } from '../localization/localizationHelpers.js'

export default {
  initialize: function () {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      e.stopPropagation()

      var inputMenu = [
        [
          {
            label: l('undo'),
            role: 'undo'
          },
          {
            label: l('redo'),
            role: 'redo'
          }
        ],
        [
          {
            label: l('cut'),
            role: 'cut'
          },
          {
            label: l('copy'),
            role: 'copy'
          },
          {
            label: l('paste'),
            role: 'paste'
          }
        ],
        [
          {
            label: l('selectAll'),
            role: 'selectall'
          }
        ]
      ]

      let node = e.target

      while (node) {
        if (node.nodeName.match(/^(input|textarea)$/i) || node.isContentEditable) {
          if (node.id === 'tab-editor-input') {
            inputMenu[1].push({
              label: l('pasteAndGo'),
              click: function () {
                searchbar.openURL(electron.clipboard.readText())
              }
            })
          }
          remoteMenu.open(inputMenu)
          break
        }
        node = node.parentNode
      }
    })
  }
}

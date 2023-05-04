import browserUI from '../browserUI.js'

var addTabButton = document.getElementById('add-tab-button')

function initialize () {
  addTabButton.addEventListener('click', function (e) {
    browserUI.addTab()
  })
}

export default { initialize }

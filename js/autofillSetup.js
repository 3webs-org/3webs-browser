import setupDialog from './passwordManager/managerSetup.js'
import settings from './util/settings/settings.js'
import PasswordManagers from './passwordManager/passwordManager.js'

const AutofillSetup = {
  checkSettings: function () {
    const manager = PasswordManagers.getActivePasswordManager()
    if (!manager) {
      return
    }

    manager.checkIfConfigured().then((configured) => {
      if (!configured) {
        setupDialog.show(manager)
      }
    }).catch((err) => {
      console.error(err)
    })
  },
  initialize: function () {
    settings.listen('passwordManager', function (manager) {
      if (manager) {
        // Trigger the check on browser launch and after manager is enabled
        AutofillSetup.checkSettings()
      }
    })
  }
}

export default AutofillSetup

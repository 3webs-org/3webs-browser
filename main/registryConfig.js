const { app } = require('electron')
var regedit = require('regedit')

var installPath = process.execPath

var keysToCreate = [
  'HKCU\\Software\\Classes\\3WebsBrowser',
  'HKCU\\Software\\Classes\\3WebsBrowser\\Application',
  'HKCU\\Software\\Classes\\3WebsBrowser\\DefaulIcon',
  'HKCU\\Software\\Classes\\3WebsBrowser\\shell\\open\\command',
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\Capabilities\\FileAssociations',
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\Capabilities\\StartMenu',
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\Capabilities\\URLAssociations',
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\DefaultIcon',
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\InstallInfo',
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\shell\\open\\command'
]

var registryConfig = {
  'HKCU\\Software\\RegisteredApplications': {
    '3WebsBrowser': {
      value: 'Software\\Clients\\StartMenuInternet\\3WebsBrowser\\Capabilities',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\3WebsBrowser': {
    default: {
      value: '3Webs Browser Document',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Classes\\3WebsBrowser\\Application': {
    ApplicationIcon: {
      value: installPath + ',0',
      type: 'REG_SZ'
    },
    ApplicationName: {
      value: '3WebsBrowser',
      type: 'REG_SZ'
    },
    AppUserModelId: {
      value: '3WebsBrowser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\3WebsBrowser\\DefaulIcon': {
    ApplicationIcon: {
      value: installPath + ',0',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\3WebsBrowser\\shell\\open\\command': {
    default: {
      value: '"' + installPath + '" "%1"',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Classes\\.htm\\OpenWithProgIds': {
    '3WebsBrowser': {
      value: 'Empty',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\.html\\OpenWithProgIds': {
    '3WebsBrowser': {
      value: 'Empty',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\Capabilities\\FileAssociations': {
    '.htm': {
      value: '3WebsBrowser',
      type: 'REG_SZ'
    },
    '.html': {
      value: '3WebsBrowser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\Capabilities\\StartMenu': {
    StartMenuInternet: {
      value: '3WebsBrowser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\Capabilities\\URLAssociations': {
    http: {
      value: '3WebsBrowser',
      type: 'REG_SZ'
    },
    https: {
      value: '3WebsBrowser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\DefaultIcon': {
    default: {
      value: installPath + ',0',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\InstallInfo': {
    IconsVisible: {
      value: 1,
      type: 'REG_DWORD'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\3WebsBrowser\\shell\\open\\command': {
    default: {
      value: installPath,
      type: 'REG_DEFAULT'
    }
  }
}

var registryInstaller = {
  install: function () {
    return new Promise(function (resolve, reject) {
      regedit.createKey(keysToCreate, function (err) {
        regedit.putValue(registryConfig, function (err) {
          if (err) {
            reject()
          } else {
            resolve()
          }
        })
      })
    })
  },
  uninstall: function () {
    return new Promise(function (resolve, reject) {
      regedit.deleteKey(keysToCreate, function (err) {
        if (err) {
          reject()
        } else {
          resolve()
        }
      })
    })
  }
}

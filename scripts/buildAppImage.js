const builder = require('electron-builder')
const packageFile = require('./../package.json')
const version = packageFile.version
const Platform = builder.Platform
const Arch = builder.Arch

require('./createPackage.js')('linux', {arch: Arch.x64}).then(function (path) {
  const options = {
    linux: {
      target: ['AppImage'],
      icon: 'icons/icon256.png',
      category: 'Network',
      packageCategory: 'Network',
      mimeTypes: ['x-scheme-handler/http', 'x-scheme-handler/https', 'text/html'],
      synopsis: packageFile.shortDescription,
      description: packageFile.description,
      maintainer: packageFile.author,
    },
    directories: {
      output: 'dist/app/'
    },
  }

  builder.build({
    prepackaged: path,
    targets: Platform.LINUX.createTarget(['AppImage'], Arch.x64),
    config: options
  })
})

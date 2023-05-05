import fs from 'fs'
import path from 'path'
const { app, protocol } = require('electron')

function registerCustomProtocols () {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: 'web3',
      privileges: {
        standard: true,
        secure: true,
        supportFetchAPI: true,
        corsEnabled: true,
      }
    }, {
      scheme: 'browser',
      privileges: {
        standard: true,
        secure: true,
        bypassCSP: true,
        corsEnabled: true,
        supportFetchAPI: false,
      }
    }
  ])

  let mimeTypes = {
    'html': 'text/html',
    'js': 'text/javascript',
    'css': 'text/css',
    'json': 'application/json',
    'ico': 'image/x-icon',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'gif': 'image/gif',
    'icns': 'image/x-icns',
    'svg': 'image/svg+xml',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'eot': 'font/eot',
    'otf': 'font/otf',
    'txt': 'text/plain',
    'wav': 'audio/wav',
    'mp3': 'audio/mpeg',
    'mp4': 'video/mp4',
    'webm': 'video/webm',
  }

  app.on('session-created', (session) => {
    session.protocol.handle('web3', async (request) => {
      return new Response('Hello World!')
    })
    session.protocol.handle('browser', async (request) => {
      try {
        let urlObj = new URL(request.url)
        if (['ext', 'dist', 'icons', 'js', 'css', 'localization'].includes(urlObj.hostname)) {
          return new Response(
            fs.readFileSync(
              path.join(app.getAppPath(), urlObj.hostname, urlObj.pathname), 'utf8'
            ), {
              headers: { 'Content-Type': mimeTypes[urlObj.pathname.split('.').pop()] }
            }
          )
        }
        if (urlObj.pathname == '/') {
          return new Response(
            fs.readFileSync(
              path.join(app.getAppPath(), 'pages', urlObj.hostname, 'index.html'), 'utf8'
            ), {
              headers: { 'Content-Type': mimeTypes['html'] }
            }
          )
        }
        return new Response(
          fs.readFileSync(
            path.join(app.getAppPath(), 'pages', urlObj.hostname, urlObj.pathname), 'utf8'
          ), {
            headers: { 'Content-Type': mimeTypes[urlObj.pathname.split('.').pop()] }
          }
        )
      } catch {
        return new Response(
          fs.readFileSync(
            path.join(app.getAppPath(), 'pages', 'error', 'index.html'), 'utf8'
          ), {
            headers: { 'Content-Type': mimeTypes['html'] }
          }
        )
      }
    })
  })
}

module.exports = {
  registerCustomProtocols
}

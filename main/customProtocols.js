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

app.on('session-created', (session) => {
  console.log('session created')
  session.protocol.handle('web3', async (request) => {
    return new Response('Hello World!')
  })
  session.protocol.handle('browser', async (request) => {
    try {
      let urlObj = new URL(request.url)
      console.log(JSON.stringify({
        pathname: urlObj.pathname,
        search: urlObj.search,
        hash: urlObj.hash,
        host: urlObj.host,
        hostname: urlObj.hostname,
        port: urlObj.port,
        protocol: urlObj.protocol,
        origin: urlObj.origin,
        href: urlObj.href,
      }))
      if (['ext', 'dist', 'icons', 'js', 'css'].includes(urlObj.hostname)) {
        return new Response(
          fs.readFileSync(
            path.join(__dirname, urlObj.hostname, urlObj.pathname), 'utf8'
          ), {
            headers: { 'Content-Type': 'text/html' }
          }
        )
      }
      if (urlObj.pathname == '/') {
        return new Response(
          fs.readFileSync(
            path.join(__dirname, 'pages', urlObj.hostname, 'index.html'), 'utf8'
          ), {
            headers: { 'Content-Type': 'text/html' }
          }
        )
      }
      return new Response(
        fs.readFileSync(
          path.join(__dirname, 'pages', urlObj.hostname, urlObj.pathname), 'utf8'
        ), {
          headers: { 'Content-Type': 'text/html' }
        }
      )
    } catch {
      return new Response(
        fs.readFileSync(
          path.join(__dirname, 'pages', 'error', 'index.html'), 'utf8'
        ), {
          headers: { 'Content-Type': 'text/html' }
        }
      )
    }
  })
  console.log('session protocol registered')
})

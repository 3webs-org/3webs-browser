module.exports = require('esm')(module, {
    cjs: {
        cache: true,
        esModule: true,
        extensions: true,
        mutableNamespace: true,
        namedExports: true,
        paths: true,
        vars: true,
        dedefault: true,
        topLevelReturn: false
    },
    mainFields: ['main', 'module'],
    mode: 'auto',
    await: true,
    force: true,
    wasm: true
})('./main.js')

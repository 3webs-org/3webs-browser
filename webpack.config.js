import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import CreateFileWebpack from 'create-file-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default [{
    target: 'electron-main',
    entry: './src/main/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist/main/'),
        filename: 'main.js',
        sourceMapFilename: 'main.js.map'
    },
    plugins: [
        new CreateFileWebpack({
            path: './dist',
            fileName: 'package.json',
            content: JSON.stringify({
                'type': 'commonjs',
                'main': 'main/main.js'
            })
        })
    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader'
            }
        ],
    },
    resolve: {
        fallback: {
            ".": false
        }
    },
    stats: {
        colors: true,
        errorDetails: true
    },
    devtool: 'source-map'
}, {
    target: 'electron-renderer',
    entry: './src/renderer/renderer.tsx',
    output: {
        path: path.resolve(__dirname, 'dist/renderer/'),
        filename: 'renderer.js',
        sourceMapFilename: 'renderer.js.map'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader'
            }
        ],
    },
    resolve: {
        fallback: {
            ".": false
        }
    },
    stats: {
        colors: true,
        errorDetails: true
    },
    devtool: 'source-map'
}];

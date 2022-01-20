const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    target: 'node',
    entry: path.resolve('server', 'server.js'),
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    output: {
        path: path.resolve('server'),
        filename: 'index.js',
        // assetModuleFilename: 'static/media/[name].[hash][ext]',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['css-loader'],
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/i,
            //     type: 'asset/resource',
            // },
        ],
    },
}

/* eslint-disable */
const PKG = require('./package.json');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: `${PKG.name}.js`
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx']
                },
            },
        ],
    },
};

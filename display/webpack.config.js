var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");
var path = require('path');


module.exports = {
    context: path.join(__dirname, 'public'),
    entry: path.join(__dirname, 'public', 'src', 'js', 'index.js'),
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'js/[name].js',
        publicPath: './dist'
    },
    module: {
        loaders: [{
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            loaders: [
                'file-loader?name=images/[name].[ext]',
                {
                    loader: 'image-webpack',
                    query: {
                        progressive: true,
                        optimizationLevel: 7,
                        interlaced: false,
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        }
                    }
                }
            ]},
            {
                test: /\.styl$/,
                loader: stylusLoader
            }]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].css'),
        new CopyWebpackPlugin([
            { from: 'src/images', to: 'images' }
        ])
    ]
};
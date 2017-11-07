// Entry -> output
const path = require('path');

// To extract the styles into their own file:
// 1. Require the new plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {

    const isProduction = env === 'production';

    // 2. Make a new instance of ExtractTextPlugin. We need to pass a single argument to
    // the constructor function, this is the name of the file
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                // This is where wwe define exactly how we want the abstraction to work and in our case we do have
                // some plugins we want to run
                use: CSSExtract.extract({
                    use: [
                        // In order to enable the source map for our css:
                        //'css-loader',
                        //'sass-loader'
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        // 3. Pass CSSExtract into the plugins array
        plugins: [
            CSSExtract
        ],
        //devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};
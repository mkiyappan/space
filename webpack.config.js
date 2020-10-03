const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/main.js',
   output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                   presets: ['@babel/preset-env','@babel/react'],
                   plugins: ['@babel/proposal-class-properties']
                }
            }
         },
         { 
            test: /\.css$/, 
            use: [ 'style-loader', 'css-loader' ]
         },
         {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            use: ['url-loader']
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ]
}
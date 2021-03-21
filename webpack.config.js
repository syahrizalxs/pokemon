const HtmlWebpackPlugin = require('html-webpack-plugin')

const { HotModuleReplacementPlugin } = require('webpack')

const path = require('path')

let mode  = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./src/assets/styles/_variables.scss']
          },
        },]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") }),
    new HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true
  },
}
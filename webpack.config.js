const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

let mode  = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") })],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
}
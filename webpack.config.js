const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      progress: true,
    },
    compress: true,
    port: 8000,
  },
  plugins: [new HtmlWebpackPlugin({
    template: '/public/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.(?:jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ["@babel/preset-react", {runtime: "automatic"}]
            ]
          }
        }
      },
    ]
  }
};
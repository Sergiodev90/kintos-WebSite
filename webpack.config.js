const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // o 'production'
  entry: {
    main: './src/index.js',
    mobile: './styles/mobile.css',
    tablet: './styles/tablet.css',
    styles: './styles/main.css' // Agregamos main.css como una entrada
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    })
  ]
};

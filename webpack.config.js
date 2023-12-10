const path = require('path');

module.exports = {
  entry: './src/index.js', // Ruta del archivo de entrada principal
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist') // Carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplicar regla a archivos JavaScript
        exclude: /node_modules/, // Excluir la carpeta node_modules
        use: {
          loader: 'babel-loader', // Usar Babel para transpilar el código
          options: {
            presets: ['@babel/preset-env'] // Configurar preset de Babel
          }
        }
      }
    ]
  }
};

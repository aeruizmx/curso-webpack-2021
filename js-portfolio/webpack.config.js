const path = require('path');

module.exports = {
  // Entry nos permite decir el punto de entrada de nuestra aplicación
  entry: './src/index.js',
  // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
  output: {
    // path es donde estará la carpeta donde se guardará los archivos
    // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
    path: path.resolve(__dirname, 'dist'),
    // filename le pone el nombre al archivo final
    filename: 'main.js'
  },
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: ['.js']
  },
}
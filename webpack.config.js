const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
      index: './src/index.js',
    //   print: './src/print.js'
    },
    // devtool: 'inline-source-map',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public/scripts')
    }
}
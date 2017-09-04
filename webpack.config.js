const path = require('path');

const APP_DIR = path.resolve(__dirname, 'client/src');
const BUILD_DIR = path.resolve(__dirname, 'client/public');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-2"]
        }
      }, 
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
      }
     // { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import "babel-polyfill";

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src')
  };
  
  // Webpack configuration
  module.exports = {
    entry: [ "babel-polyfill", path.join(paths.SRC, 'index.js') ],
    output: {
      path: paths.DIST,
      filename: 'app.bundle.js' 
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    }
  };
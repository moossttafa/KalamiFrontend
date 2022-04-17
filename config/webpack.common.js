const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const glob = require('glob')
const paths = require('./paths')

const getDirectories = (src, callback, options = null) => glob.sync(src, options).map(f => callback(f))

const getPugPages = () => getDirectories(
  paths.src + '/views/' + '/**/*.pug',
  (file) => {
    let dirName = path.dirname(file).split(path.sep).pop(),
      FName = path.basename(file).replace('.pug', '.html'),
      filename = dirName.indexOf('views') === -1 && dirName.indexOf('pages') === -1 ? dirName + path.sep + FName : FName

    return new HtmlWebpackPlugin({ filename, template: file, inject: true })
  },
  {
    ignore: ['**/mixins/**'],
  },
)

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    ...getPugPages(),
    /* new HtmlWebpackPlugin({
       title: 'webpack Boilerplate',
       // favicon: paths.src + '/images/favicon.png',
       template: paths.src + 'views/index.pug', // template file
       filename: 'index.html', // output file
       // inject: false,
     }),*/

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },

      // Pug files
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader'], //
      },

      // audio files
      {
        test: /\.(mp3|wav|ogg)$/i,
        loader: 'file-loader',
      },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}

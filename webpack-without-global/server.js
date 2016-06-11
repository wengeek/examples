var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var packageConfig = require('./package.json');
var webpackConfig = require('./webpack.config');

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(packageConfig.config.port, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at http://localhost:' + packageConfig.config.port);
});

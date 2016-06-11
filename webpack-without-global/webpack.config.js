var path = require('path');
var webpack = require('webpack');
var os =require('os');
var packageConfig = require('./package.json');

var ip = getIp(os.networkInterfaces());

module.exports = {
  entry: [
    'webpack-dev-server/client?http://'+ ip + ':' + packageConfig.config.port, //方便远程调试
    'webpack/hot/dev-server',
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};

//获取本机IP
function getIp(ifaces) {
  var ip = '';
  Object.keys(ifaces).forEach(function (ifname) {
    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        return;
      }

      ip = iface.address;
    });
  });

  return ip;
}

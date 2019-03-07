// webpack
module.exports = {
  // add config alias
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.101.6:30645',
      },
      '/v1': {
        target: 'http://192.168.101.5:30880',
      },
    },
    host: 'localhost',
    port: 8089,
    open: true,
  },
};
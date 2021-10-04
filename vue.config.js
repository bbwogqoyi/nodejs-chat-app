// vue.config.js
module.exports = {
  devServer: {
    proxy: 'http://localhost:8080',
    headers: { "Access-Control-Allow-Origin": "*" }
  }
}
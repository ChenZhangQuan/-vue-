var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.dev.config");
var compiler = webpack(config);

console.log('publicPath:' + config.output.publicPath);

var server = new webpackDevServer(compiler, {
	publicPath: config.output.publicPath
});




var port = '8083'
var url = 'http://localhost:' + port

config.entry.app = [`webpack-dev-server/client?${url}`, "webpack/hot/dev-server", config.entry.app];


server.listen(port, "0.0.0.0");
// 打包完毕后启动浏览器
server.middleware.waitUntilValid(function () {
	console.log(`> Listening at ${url}`);
	require('child_process').exec(`start ${url}`);
})

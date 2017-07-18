var webpack = require("webpack");
var config = require('./webpack.prod.config');
webpack(config, function (err, stats) {
    // 打印编译结果信息
    process.stdout.write(stats.toString());
});

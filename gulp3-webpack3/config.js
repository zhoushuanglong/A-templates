const proxy = require('http-proxy-middleware')

/**
 * 不添加hash的图片 src/img-not-hash
 * 不进行代码检测与压缩的JS src/js-not-lint
 * ESLint忽略文件 .eslintignore
 * Stylelint忽略文件 .stylelintrc -> ignoreFiles
 */
module.exports = {
    host: '192.168.84.43',
    port: '8020',
    publicPath: '../',
    vendors: ['axios', 'echarts'],
    proxy: [
        proxy('/community/login/createtoken.do', {
            target: 'http://play.linekong.com',
            changeOrigin: true
        }),
        proxy('/otherServer', {
            target: 'http://IP:Port',
            changeOrigin: true
        })
    ]
}

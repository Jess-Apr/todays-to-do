const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/data/2.5', {
            target: 'https://api.openweathermap.org',
            changeOrigin: true,
        })
    )

    app.use(
        createProxyMiddleware('/v2/top-headlines', {
            target: 'GET https://newsapi.org',
            changeOrigin: true,
        })
    )
}
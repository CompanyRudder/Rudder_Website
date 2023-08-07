const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      //target: "http://도메인주소:8080",
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
};

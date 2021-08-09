const router = require("koa-router")();
const homeController = require('../controller/home');
module.exports = (app) => {
    router.get('/',homeController.home);
    app.use(router.routes()).use(router.allowedMethods());
};

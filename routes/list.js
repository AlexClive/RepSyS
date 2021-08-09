const router = require("koa-router")();
const listController = require('../controller/list');
module.exports = (app) => {
    router.get('/list',listController.list);
    app.use(router.routes()).use(router.allowedMethods());
};

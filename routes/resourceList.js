const router = require("koa-router")();
const resourceListController = require('../controller/resourceList');
module.exports = (app) => {
    router.get('/resourceList',resourceListController.resourceList);
    app.use(router.routes()).use(router.allowedMethods());
};

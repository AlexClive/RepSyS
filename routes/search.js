const router = require("koa-router")();
const searchController = require('../controller/search');
module.exports = (app) => {
    router.get('/search',searchController.search);
    app.use(router.routes()).use(router.allowedMethods());
};

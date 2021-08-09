const router = require("koa-router")();
const topicController = require('../controller/topic');
module.exports = (app) => {
    router.get('/topic',topicController.topic);
    app.use(router.routes()).use(router.allowedMethods());
};

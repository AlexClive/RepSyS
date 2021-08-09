const Koa = require("koa");
const bodyParser = require("koa-bodyparser"); // 解析器
const serve = require("koa-static");//静态文件管理
const historyFallback = require('koa2-history-api-fallback');
const path = require("path");
const views = require("koa-views");
const publicProperty = require("./utils/publicProperty");
// 实例化
const app = new Koa();
app.use(bodyParser());
app.use(views('views', {
    map: {html: 'ejs'}
}));
// 公共信息
app.use(async (ctx, next) => publicProperty.navigation(ctx,next));
// ZK 配置项
app.use(async (ctx, next) => publicProperty.zkgrpc(ctx,next));

const home = require("./routes/home");
home(app);
const topic = require("./routes/topic");
topic(app);
const search = require("./routes/search");
search(app);
/*const list = require("./routes/list");
list(app);*/
const resourceList = require("./routes/resourceList");
resourceList(app);

// 静态页指向 必须写到最后
app.use(historyFallback());
app.use(serve(path.resolve("static")));

app.listen(3499, () => {
    console.log("程序启动成功");
    console.log("http://localhost:3499/");
});

import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser'; // 中间件 用于解析http请求体
import staticServer from 'koa-static'; // 中间件 用于处理静态资源
import mongoose from 'mongoose';
import userRouter from './routers/userRouter';

// 与数据库建立连接
mongoose.connect('mongodb://127.0.0.1:27017/read', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('连接成功');
    })
    .catch((err) => {
        console.error('连接失败', err);
    })

const app = new Koa();

app.use(staticServer('public'));// 中间件 用于处理静态资源 静态资源服务器
app.use(bodyParser()); // 中间件 用于解析http请求体

const port = 3333;
const router = new Router({
    // 设置公共前缀
    prefix: '/api'
});

// 路由配置
router.use(userRouter.routes());
app.use(router.routes());

// 错误处理中间件
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.error(err.stack);
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
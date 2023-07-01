import { context } from 'koa';
import bcrypt from 'bcrypt'
import User from '../models/user';

// get请求获取数据库数据
export const getUser = async (ctx: context) => {
    try {
        const user = await User.find();
        ctx.status = 200;
        ctx.body = user;
    } catch (error) {
        ctx.throw(500, error);
    }
}

// 注册用户
export const creatUser = async (ctx: context) => {
    try {
        const { name, password } = ctx.request.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            password: hashedPassword
        });
        await user.save();
        ctx.status = 201;
        ctx.body = user;
      } catch (error) {
        ctx.status = 400;
        ctx.body = { error: error.message };
      }
}

import Router from '@koa/router';
import { getUser, creatUser } from '../controllers/userControl';

const userRouter = new Router();

userRouter.get('/user', getUser)
userRouter.post('/user', creatUser)

export default userRouter
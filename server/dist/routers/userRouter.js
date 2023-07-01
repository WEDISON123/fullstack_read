"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const userControl_1 = require("../controllers/userControl");
const userRouter = new router_1.default();
userRouter.get('/user', userControl_1.getUser);
userRouter.post('/user', userControl_1.creatUser);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatUser = exports.getUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const getUser = async (ctx) => {
    try {
        const user = await user_1.default.find();
        ctx.status = 200;
        ctx.body = user;
    }
    catch (error) {
        ctx.throw(500, error);
    }
};
exports.getUser = getUser;
const creatUser = async (ctx) => {
    try {
        const { name, password } = ctx.request.body;
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = new user_1.default({
            name,
            password: hashedPassword
        });
        await user.save();
        ctx.status = 201;
        ctx.body = user;
    }
    catch (error) {
        ctx.status = 400;
        ctx.body = { error: error.message };
    }
};
exports.creatUser = creatUser;
//# sourceMappingURL=userControl.js.map
import { Schema, Document, model } from "mongoose";

// 定义类型约束 继承自 Document
export interface UserType extends Document {
    name: string;
    password: string;
}

// 定义简单的验证规则
const userSchema = new Schema<UserType>({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// 数据库表映射模型
const User = model<UserType>('user', userSchema);

export default User
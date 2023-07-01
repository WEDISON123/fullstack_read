import { Document } from "mongoose";
export interface UserType extends Document {
    name: string;
    password: string;
}
declare const User: import("mongoose").Model<UserType, {}, {}>;
export default User;

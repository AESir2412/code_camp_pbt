import mongoose from "mongoose";

export class UserDto {
readonly _id: mongoose.Types.ObjectId;
readonly username: string;
readonly email: string;
readonly isAdmin: boolean;
}

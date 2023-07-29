import mongoose from "mongoose";

export class UserDto {
readonly id: mongoose.Types.ObjectId;
readonly username: string;
readonly email: string;
}

import mongoose from "mongoose";

export class PostDto {
readonly owner: mongoose.Types.ObjectId;
readonly _id: mongoose.Types.ObjectId;
readonly upvoters: mongoose.Types.ObjectId[];
readonly downvoters: mongoose.Types.ObjectId[];
readonly comments: mongoose.Types.ObjectId[];
readonly text: string;
readonly timestamp: Date;
}

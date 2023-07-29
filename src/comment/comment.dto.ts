import { ModuleOverride } from "@nestjs/core/interfaces/module-override.interface";
import mongoose, { Mongoose } from "mongoose";

export class CommentDto {
    readonly owner: mongoose.Types.ObjectId;
readonly id: mongoose.Types.ObjectId;
readonly text: string;
readonly timestamp: Date;
}

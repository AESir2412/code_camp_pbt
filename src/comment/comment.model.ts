import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.model';
import * as mongoose from 'mongoose';
import { Post } from 'src/post/post.model';

@Schema()
export class Comment {
  @Prop({default: new mongoose.Types.ObjectId})
  _id : mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true })
    owner: User;

  @Prop({ required: true })
    text: String

    @Prop({type: Date, default: new Date()})
    timestamp: Date
}

export type CommentModel = Comment & Document;

export const CommentSchema = SchemaFactory.createForClass(Comment);

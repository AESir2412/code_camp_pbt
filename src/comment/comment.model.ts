import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.model';
import * as mongoose from 'mongoose';
import { Post } from 'src/post/post.model';

@Schema()
export class Comment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true })
    owner: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true })
    post: Post;
  // @Prop({required: true})
  // scoreEachSemester: [
  //     {
  //         semester: {
  //             type: String,
  //         },
  //         score: {
  //             type: Number,
  //         }
  //     }
  // ];

  @Prop({ required: true })
    text: String
}

export type CommentModel = Comment & Document;

export const CommentSchema = SchemaFactory.createForClass(Comment);

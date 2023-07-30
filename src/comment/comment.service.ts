import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CommentModel } from './comment.model';
import { Model } from 'mongoose';
import { CommentDto } from './comment.dto';

import mongoose from "mongoose";
import { User } from 'src/user/user.model';

interface Comment {
    owner: User;
    //   _id : mongoose.Types.ObjectId;
      text: String
      timestamp: Date
  }

@Injectable()
export class CommentService {
    constructor(@InjectModel('Comment') private commentModel: Model<CommentModel>) {}

    //need to fix promise to match Comment interface
    createComment = async(commentDto: CommentDto): Promise<Comment> => {
        const createdComment = new this.commentModel(commentDto);
        return createdComment.save();
    }

    findCommentByOwnerId = async (ownerId: string) => {
        const comment = this.commentModel.findOne({owner: new mongoose.Types.ObjectId(ownerId)});
        return comment;
      }
}

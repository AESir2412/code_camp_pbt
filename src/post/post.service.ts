import { Injectable} from '@nestjs/common';
import { PostModel } from './post.model';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { PostDto } from './post.dto';
import { User } from 'src/user/user.model';

interface Post{
    owner: User;
    id: mongoose.Types.ObjectId;
    upvoters: User[];
    downvoters: User[];
    comments: Comment[];
    text: String;
    timestamp: Date;
}

@Injectable()
export class PostService {
    constructor(@InjectModel('Post') private postModel: Model<PostModel>) {}

    //need to fix promise to match Comment interface
    createComment = async(postDto: PostDto): Promise<Post> => {
        const createdComment = new this.postModel(postDto);
        return createdComment.save();
    }

}

import { Injectable} from '@nestjs/common';
import { PostModel } from './post.model';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { PostDto } from './post.dto';
import { User } from 'src/user/user.model';

interface Post{
    owner: User;
    _id: mongoose.Types.ObjectId;
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
    createPost = async(postDto: PostDto): Promise<Post> => {
        const createdPost = new this.postModel(postDto);
        return createdPost.save();
    }

    getPostbyAuthor = async (author_id: string, n= 1) => {
        const post = await this.postModel.find({_id: new mongoose.Types.ObjectId(author_id)});
        if (Array.isArray(post)) {
            return post.sort((a, b) => {
                return a.timestamp.getTime() - b.timestamp.getTime();
            }).slice(0, n);
        }
        return post;
    }

    calcTrendingScore = async (postID: string) => {
        const post = await this.postModel.findOne({_id: new mongoose.Types.ObjectId(postID)});
        const totalComments = post.comments.length;
        const totalUpvotes = post.upvoters.length;
        const totalDownvotes = post.downvoters.length;
        const timeElapsed = new Date().getTime() - post.timestamp.getTime();

        const score =  (2*totalComments + totalUpvotes - totalDownvotes * 0.5) / timeElapsed;

        post.trending_score = score;
        return await post.save();
    }

    getNlatest = (n) => {
        return this.postModel.find({}).sort({timestamp: -1}).limit(n);
    }

    getNTrendyPosts = async (n) => {
        let posts = await this.postModel.find();
        posts.map(async (e) => {
            await this.calcTrendingScore(e._id.toString());
        });
        return this.postModel.find({}).sort({trending_score: -1}).limit(n);
    }

    getAllPostsByUserId(userID: string) {
        return this.postModel.find({owner: new mongoose.Types.ObjectId(userID)});
    }

    getAllPosts() {
        return this.postModel.find({});
    }
}

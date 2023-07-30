import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.model';
import * as mongoose from 'mongoose';

@Schema()
export class Post {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true })
        owner: User;

    @Prop({default: new mongoose.Types.ObjectId})
        _id : mongoose.Types.ObjectId;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Upvoters"}]})
        upvoters: User[]
    
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Upvoters"}]})
        downvoters: User[]

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Comments"}]})
        comments: Comment[]

    @Prop({ required: true })
        text: String

    @Prop({type: Date, default: new Date()})
        timestamp: Date

    @Prop({default: 0.0})
        trending_score: number
}

export type PostModel = Post & Document;

export const PostSchema = SchemaFactory.createForClass(Post);

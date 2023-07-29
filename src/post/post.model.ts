import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.model';
import * as mongoose from 'mongoose';

@Schema()
export class Post {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true })
        owner: User;

    @Prop({unique: true, default: new mongoose.Types.ObjectId})
        id : mongoose.Types.ObjectId;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Upvoters"})
        upvoters: User[]
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Downvoters"})
        downvoters: User[]

    @Prop({ required: true })
        text: String
}

export type PostModel = Post & Document;

export const PostSchema = SchemaFactory.createForClass(Post);

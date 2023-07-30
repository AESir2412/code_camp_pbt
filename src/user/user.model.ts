import { createParamDecorator } from '@nestjs/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class User {
    @Prop({default: new mongoose.Types.ObjectId})
    _id : mongoose.Types.ObjectId;
    
  @Prop({ unique: true })
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ type: Date, default: new Date()})
  lastOnline: Date;

  @Prop({required: true, default: false})
  isAdmin: boolean;

  @Prop({default: 0.0})
  score: number;
}

export const user = createParamDecorator((data, req) => {
    return req.user;
})

export type UserModel = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

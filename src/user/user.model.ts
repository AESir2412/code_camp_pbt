import { createParamDecorator } from '@nestjs/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class User {
    @Prop({unique: true, default: new mongoose.Types.ObjectId})
    id : mongoose.Types.ObjectId;
    
  @Prop({ unique: true })
  username: String;

  @Prop({ unique: true })
  email: String;
}

export const user = createParamDecorator((data, req) => {
    return req.user;
})

export type UserModel = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

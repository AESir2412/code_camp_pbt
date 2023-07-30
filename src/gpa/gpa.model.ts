import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.model';
import * as mongoose from 'mongoose';

@Schema()
export class GPA {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true })
  owner: User;

  @Prop({})
  link: string

  @Prop({ required: true })
  score: number;
}

export type GPAModel = GPA & Document;

export const GPASchema = SchemaFactory.createForClass(GPA);

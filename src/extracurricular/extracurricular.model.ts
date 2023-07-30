import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.model';
import * as mongoose from 'mongoose';

@Schema()
export class Extracurricular {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true })
  owner: User;

  @Prop({})
  proofs: [ggDriveLink: string];
}

export type ExtracurricularModel = Extracurricular & Document;

export const ExtracurricularSchema = SchemaFactory.createForClass(Extracurricular);

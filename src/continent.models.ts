import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContinentDocument = Continent & Document;

@Schema()
export class Continent {
  @Prop()
  cname: string;

  @Prop()
  ccode: string;
}

export const ContinentSchema = SchemaFactory.createForClass(Continent);

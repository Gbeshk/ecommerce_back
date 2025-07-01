import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Electronik {
  @Prop()
  name: string;

  @Prop()
  img: string;

  @Prop()
  isNewEl: boolean;

  @Prop()
  desc: string;

  @Prop()
  price: string;

  @Prop()
  priceInt: number;

  @Prop()
  featuresTxt1: string;

  @Prop()
  featuresTxt2: string;

  @Prop()
  category: string;

  @Prop()
  imgArray: string[];

  @Prop({
    type: [
      {
        item: { type: String, required: true },
        quantity: { type: String, required: true },
      },
    ],
  })
  inTheBox: { item: string; quantity: string }[];
}

export const ElectronikSchema = SchemaFactory.createForClass(Electronik);

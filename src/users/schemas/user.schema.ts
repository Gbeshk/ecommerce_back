import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    required: true,
  })
  firstName: string;

  @Prop({
    type: String,
    required: true,
  })
  lastName: string;

  @Prop({
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
    select: false,
  })
  password: string;

  @Prop({
    type: String,
    required: true,
  })
  country: string;
  @Prop({
    type: String,
    required: true,
  })
  city: string;

  @Prop({
    type: String,
    default: 'viewer',
  })
  role: string;
}

export const userSchema = SchemaFactory.createForClass(User);

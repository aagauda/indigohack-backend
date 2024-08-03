import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';

export type BookingDocument = Booking & Document;

// Define the schema for BookingAmount
@Schema()
export class BookingAmount {
  @Prop({ enum: ['premium', 'standard', 'premium_economy'], required: true })
  type: string;

  @Prop({ required: true })
  amount: number;
}

export const BookingAmountSchema = SchemaFactory.createForClass(BookingAmount);

@Schema({timestamps:true})
export class Booking {

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ required: true })
  flight_id: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  booking_date: Date;

  @Prop({ required: true })
  seat_number: string;

  @Prop({ required: true })
  from: string;

  @Prop({ required: true })
  to: string;

  @Prop({ required: true })
  travel_date: Date;

  @Prop({ type: [BookingAmountSchema], required: true })
  booking_amount: BookingAmount[]; // Array of BookingAmount subdocuments
}

export const BookingSchema = SchemaFactory.createForClass(Booking);

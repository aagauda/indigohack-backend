// src/schemas/flight.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BookingAmount, BookingAmountSchema } from './booking.schema';

export type FlightDocument = Flight & Document;

@Schema({timestamps:true})
export class Flight {

  @Prop({ required: true })
  flight_id: string;

  @Prop({ required: true })
  airline: string;

  @Prop({ required: false })
  to: string;

  @Prop({require: false})
  from: string;

  @Prop({ required: false })
  travel_date: Date;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  departure_gate: string;

  @Prop({ required: true })
  arrival_gate: string;

  @Prop({ required: true })
  scheduled_departure: Date;

  @Prop({ required: true })
  scheduled_arrival: Date;

  @Prop()
  actual_departure: Date;

  @Prop()
  actual_arrival: Date;

  @Prop({ type: [BookingAmountSchema], required: true })
  booking_amount: BookingAmount[]; // Array of BookingAmount subdocuments



}

export const FlightSchema = SchemaFactory.createForClass(Flight);

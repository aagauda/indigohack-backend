import { IsString, IsNotEmpty, IsDateString, ValidateNested, IsArray, ArrayNotEmpty, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';



export class BookingAmountDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  amount: number;
}

export class CreateBookingDto {

  @IsString()
  @IsNotEmpty()
  flight_id: string;

  @IsString()
  @IsNotEmpty()
  seat_number: string;

  @IsString()
  @IsNotEmpty()
  from: string;

  @IsString()
  @IsNotEmpty()
  to: string;

  @IsDateString()
  @IsNotEmpty()
  travel_date: string;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => BookingAmountDto)
  booking_amount: BookingAmountDto[];
}

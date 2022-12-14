import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePassengerMDto {
  // @IsInt()
  // @IsNotEmpty()
  // ticket: number;
  @IsString()
  @IsNotEmpty()
  passenger: string;
  @IsString()
  @IsNotEmpty()
  Destination: string;
  // Image: string;
  // static Image: any;
  // static Image: any;
}

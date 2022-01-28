import {
  IsString,
  IsNumber,
  IsEmail,
  MinLength,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UserInput {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  dob: string;

  @ApiProperty({
    minimum: 7,
    maximum: 17,
    description: 'Respective user will be upadated',
  })
  @MinLength(7)
  @MaxLength(17)
  @IsNumber()
  phone: number;
}

export class UserUpdateBody {
  @ApiProperty({})
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Unique User Email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'DOB in date Format',
  })
  @IsString()
  dob: string;

  @ApiProperty({
    minimum: 7,
    maximum: 17,
    description: 'Respective user will be upadated',
  })
  @IsNumber()
  phone: number;

  @ApiProperty()
  @IsNumber()
  id: number;
}

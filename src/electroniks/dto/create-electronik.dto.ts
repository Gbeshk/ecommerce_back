import {
  IsString,
  IsBoolean,
  IsNumber,
  IsArray,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

class BoxItemDto {
  @IsNotEmpty()
  @IsString()
  item: string;

  @IsNotEmpty()
  @IsString()
  quantity: string;
}

export class CreateElectronikDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  img: string;

  @IsNotEmpty()
  @IsBoolean()
  isNewEl: boolean;

  @IsNotEmpty()
  @IsString()
  desc: string;

  @IsArray()
  @IsString({ each: true })
  imgArray: string[];

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsString()
  featuresTxt1: string;

  @IsNotEmpty()
  @IsString()
  featuresTxt2: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BoxItemDto)
  inTheBox: BoxItemDto[];
}

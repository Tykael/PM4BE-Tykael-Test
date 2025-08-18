import {
  IsEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { Categories } from 'src/categories/entities/categories.entity';

export class UpdateProductsDto {
  @IsEmpty({ message: 'El nombre no se puede modificar' })
  name?: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  description?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  price?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  stock?: number;

  @IsEmpty({ message: 'La categoria no se puede modificar' })
  category?: Categories;
}

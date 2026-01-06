/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty({ message: 'Марка автомобиля обязательна для заполнения' })
  make: string;

  @IsString()
  @IsNotEmpty({ message: 'Модель автомобиля обязательна для заполнения' })
  model: string;

  @IsNumber({}, { message: 'Год должен быть числом' })
  @Min(1900, { message: 'Год должен быть не меньше 1900' })
  @Max(new Date().getFullYear() + 1, { message: 'Год не может быть больше текущего года + 1' })
  @IsNotEmpty({ message: 'Год обязателен для заполнения' })
  year: number;

  @IsNumber({}, { message: 'Цена должна быть числом' })
  @Min(0, { message: 'Цена не может быть отрицательной' })
  @IsNotEmpty({ message: 'Цена обязательна для заполнения' })
  price: number;
}


/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './car.entity';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars') // Все маршруты в этом контроллере будут начинаться с /cars
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get() // Обрабатывает GET запросы на /cars
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Post() // Обрабатывает POST запросы на /cars
  async create(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return await this.carsService.create(createCarDto);
  }
}
/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './car.entity';

@Controller('cars') // Все маршруты в этом контроллере будут начинаться с /cars
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get() // Обрабатывает GET запросы на /cars
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }
}
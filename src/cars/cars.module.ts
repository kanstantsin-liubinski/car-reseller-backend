/* eslint-disable prettier/prettier */
// src/cars/cars.module.ts
import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity'; // Импортируем сущность

@Module({
  imports: [TypeOrmModule.forFeature([Car])], // Регистрируем сущность Car в этом модуле
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
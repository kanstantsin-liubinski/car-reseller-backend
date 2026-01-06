/* eslint-disable prettier/prettier */
// src/cars/cars.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) // Внедряем репозиторий для сущности Car
    private carsRepository: Repository<Car>,
  ) {}

  // Метод для получения всех машин
  async findAll(): Promise<Car[]> {
    return this.carsRepository.find(); // Находит все записи в таблице 'car'
  }

  // (Опционально) Метод для добавления тестовых данных при запуске
  async seedTestData() {
    const count = await this.carsRepository.count();
    if (count === 0) {
      await this.carsRepository.save([
        { make: 'Toyota', model: 'Camry', year: 2021, price: 25000 },
        { make: 'Honda', model: 'Civic', year: 2022, price: 22000 },
        { make: 'Ford', model: 'Mustang', year: 2020, price: 35000 },
        { make: 'Acura', model: 'Integra', year: 2020, price: 25000 },
      ]);
      console.log('Test data seeded!');
    }
  }

  // Вызов метода сидирования при инициализации модуля (если нужно)
  async onModuleInit() {
    await this.seedTestData();
  }
}

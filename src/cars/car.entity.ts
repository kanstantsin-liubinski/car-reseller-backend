/* eslint-disable prettier/prettier */
// src/cars/car.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Указывает, что это сущность базы данных (таблица 'car')
export class Car {
  @PrimaryGeneratedColumn() // Автоинкрементный первичный ключ (id)
  id: number;

  @Column() // Обычная колонка (тип varchar по умолчанию)
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) // Цена
  price: number;
}
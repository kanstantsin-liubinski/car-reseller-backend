/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: '9342393',
      database: 'car-reseller-simulator',
      autoLoadEntities: true,
      synchronize: true, // На проде отключить!
    }),
    CarsModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorModule } from './admin/vendor/vendor.module';
import { DatabaseModule } from './database/database.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { OrdersModule } from './orders/orders.module';
import { UserModule } from './admin/user/user.module';
// require('dotenv').config();
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    // TODO:: Move this stuff to environment...
    TypeOrmModule.forRoot(
      {
        "name": "default",
        "type": "postgres",
        "host": process.env.DB_HOST,
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_DATABASE,
        "port": +process.env.DB_PORT,
        "ssl": (process.env.DB_SSL === 'true'),
        "synchronize": (process.env.DB_SYNCHRONIZE === 'true'),
        "dropSchema": (process.env.DB_DROP_SCHEMA === 'true'),
        "migrationsRun": (process.env.DB_MIGRATIONS_RUN === 'true'),
        "logging": "all",
        "entities": [
          "dist/entities/*.entity.js"
        ],
        "migrations": [
          "dist/migrations/*.js",
        ],
        "subscribers": [
          "subscriber/**/*js"
        ],
        "cli": {
          "migrationsDir": "/migrations",
          "subscribersDir": "/subscriber"
        }
      }
    ),
    DatabaseModule,
    VendorModule,
    RestaurantModule,
    OrdersModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

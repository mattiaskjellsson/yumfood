import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorModule } from './admin/vendor/vendor.module';
import { DatabaseModule } from './database/database.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "name": "default",
      "type": "postgres",
      "host": "localhost", 
      "username": "dbUser", 
      "password": "toor",
      "database": "yum",
      "port": 5431,
      "ssl": false,
      "synchronize": true,
      "dropSchema": true,
      "migrationsRun": true,
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
    }),
    DatabaseModule,
    VendorModule,
    RestaurantModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

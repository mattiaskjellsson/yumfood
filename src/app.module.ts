import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

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
        "dist/src/entities/*.entity.js"
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
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


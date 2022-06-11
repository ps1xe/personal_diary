import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './pages/entities/page.entity';
import { PagesModule } from './pages/page.module';
import { User } from './auth/entities/auth.entity';
import { AuthModule } from './auth/auth.module';

require('dotenv').config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      synchronize: true,
      entities: [User, Page]
    }),
    PagesModule,
    AuthModule
  ],
})
export class AppModule { }

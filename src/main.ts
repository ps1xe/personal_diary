import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module';


async function bootstrap() {


  const app = await NestFactory.create(AppModule);

  require('dotenv').config()
  const cors = require("cors")

  app.useGlobalPipes(new ValidationPipe)
  app.use(cors({
    origin: 'https://personal-diary-chi.vercel.app/',
    credentials: true, 
    optionSuccessStatus: 200
  }));

  

  app.use(cookieParser());
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Diary')
    .setDescription('The diary API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swager', app, document);



  await app.listen(process.env.PORT || 3000);
}


bootstrap();

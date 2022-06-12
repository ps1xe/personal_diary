import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module';


async function bootstrap() {


  const app = await NestFactory.create(AppModule);

  require('dotenv').config()


  app.enableCors();
  
  // const whiteList = ['https://personal-diary-chi.vercel.app']


  // app.enableCors({
  //   origin: function (origin, callback) {

  //     if (whiteList.indexOf(origin) !== -1) callback(null, true);
  //     callback(new Error('Blocked by CORS'));
  //   },
  // });


  app.useGlobalPipes(new ValidationPipe)



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

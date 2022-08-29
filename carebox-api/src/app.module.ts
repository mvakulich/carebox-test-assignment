import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovidModule } from './covid/covid.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/carebox', {
      user: 'carebox',
      pass: '_carebox2022.',
    }),
    CovidModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

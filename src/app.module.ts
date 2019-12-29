import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostcardService } from './services/postcard.service';
import { Postcard } from './models/postcard.model';
import { PostcardController } from 'src/controllers/postcard';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/new-year-2020'),
    MongooseModule.forFeature([{ name: 'Postcard', schema: Postcard }]),
  ],
  controllers: [AppController, PostcardController],
  providers: [PostcardService],
})
export class AppModule {}

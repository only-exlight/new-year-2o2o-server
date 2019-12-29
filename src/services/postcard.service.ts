import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPostcard } from 'src/interfaces/postcard';

@Injectable()
export class PostcardService {
  constructor(@InjectModel('Postcard') private postcard: Model<IPostcard>) {}

  async create(data: IPostcard) {
    try {
      await this.postcard.create(data);
    } catch (error) {
     throw error;
    }
  }

  async get(url: string) {
    try {
      const postcard = this.postcard.findOne({ url });
      return postcard;
    } catch (error) {
      throw error;
    }
  }
}

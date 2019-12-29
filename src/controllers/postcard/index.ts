import { Controller, Get, Post, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { IPostcard } from 'src/interfaces/postcard';
import { PostcardService } from 'src/services/postcard.service';

@Controller('/postcard')
export class PostcardController {
  constructor(private postcardSrv: PostcardService) {}
  @Get('/:id')
  async getPostcard(@Param() params: any) {
    try {
      const postcard = await this.postcardSrv.get(params.id);
      return postcard;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/')
  async createPostcard(@Body() body: IPostcard) {
    try {
      await this.postcardSrv.create(body);
      return;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

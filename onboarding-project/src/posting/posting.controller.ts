import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostingDto } from './posting.dto';
import { PostingService } from './posting.service';

@Controller('posting')
export class PostingController {
  constructor(private postingService: PostingService) {}

  @Post()
  async create(@Body() postingDto: PostingDto) {
    const result = await this.postingService.createPost(postingDto);
    return result;
  }

  @Get()
  async getList() {
    const result = await this.postingService.getAllPosts();
    return result;
  }

  @Get(':id')
  async getOne(@Param('id') postingId: number) {
    const result = await this.postingService.getOnePost({ id: postingId });
    return result;
  }

  @Put(':id')
  async setOne(@Param('id') postingId: number, @Body() postingDto: PostingDto) {
    const result = await this.postingService.updatePost(postingId, postingDto);
    return result;
  }

  @Delete(':id')
  async removeOne(@Param('id') postingId: number) {
    const result = await this.postingService.deletePost(postingId);
    return result;
  }
}

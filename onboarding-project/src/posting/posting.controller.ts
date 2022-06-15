import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { CompanyService } from 'src/company/company.service';
import { PostingCreateDto } from './dto/posting.create.dto';
import { PostingDto } from './dto/posting.dto';
import { PostingUpdateDto } from './dto/posting.update.dto';
import { Posting } from './posting.entity';
import { PostingService } from './posting.service';

@Controller('posting')
export class PostingController {
  constructor(
    private postingService: PostingService,
    private companyService: CompanyService,
  ) {}

  @Post()
  async createPost(@Body() postingCreateDto: PostingCreateDto) {
    const company = await this.companyService.getOneCompany(
      postingCreateDto.companyId,
    );

    const posting = new Posting();
    posting.companyId = company.companyId;
    posting.companyName = company.companyName;
    posting.country = company.country;
    posting.area = company.area;
    posting.position = postingCreateDto.position;
    posting.compensation = postingCreateDto.compensation;
    posting.content = postingCreateDto.content;
    posting.stack = postingCreateDto.stack;

    const result = await this.postingService.createPost(posting);
    return result;
  }

  @Get()
  async getListPost() {
    const result = await this.postingService.getAllPosts();
    return result;
  }

  @Get('/search')
  async getSearchCompany(@Query('company') keyword: string) {
    const result = await this.postingService.getSearchCompany(keyword);
    return result;
  }

  @Put(':id')
  async updatePost(
    @Param('id') postingId: string,
    @Body() postingUpdateDto: PostingUpdateDto,
  ) {
    const result = await this.postingService.updatePost(
      +postingId,
      postingUpdateDto,
    );
    return result;
  }

  @Delete(':id')
  async deletePost(@Param('id') postingId: number) {
    const result = await this.postingService.deletePost(postingId);
    return result;
  }

  @Get('/detail')
  async getPostingDetail(@Query('id') id: number) {
    const result = await this.postingService.getPostingDetail(id);
    return result;
  }
}

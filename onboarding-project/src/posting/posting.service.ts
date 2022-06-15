import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posting } from './posting.entity';
import { CompanyService } from '../company/company.service';
import { PostingUpdateDto } from './dto/posting.update.dto';

@Injectable()
export class PostingService {
  constructor(
    @InjectRepository(Posting)
    private readonly postingRepository: Repository<Posting>,
  ) {}

  async createPost(posting: Posting) {
    return await this.postingRepository.save(posting);
  }

  async getAllPosts() {
    return await this.postingRepository
      .createQueryBuilder()
      .select([
        'idx',
        'companyName',
        'country',
        'area',
        'position',
        'compensation',
        'stack',
      ])
      .getRawMany();
  }

  getSearchCompany(company): Promise<Posting[]> {
    return this.postingRepository
      .createQueryBuilder()
      .select([
        'idx',
        'companyName',
        'country',
        'area',
        'position',
        'compensation',
        'stack',
      ])
      .where('companyName = :companyname', { companyname: company })
      .getRawMany();
  }

  async getPostingDetail(idx): Promise<Posting[]> {
    return await this.postingRepository
      .createQueryBuilder()
      .select([
        'idx',
        'companyName',
        'country',
        'area',
        'position',
        'compensation',
        'stack',
        'content',
      ])
      .where('idx = :postId', { postId: idx })
      .getRawMany();
  }

  async updatePost(id: number, postingUpdateDto: PostingUpdateDto) {
    return await this.postingRepository.update(id, postingUpdateDto);
  }

  async deletePost(id) {
    return await this.postingRepository.delete(id);
  }
}

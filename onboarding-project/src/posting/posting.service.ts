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
    return await this.postingRepository.find();
  }

  async getSearchCompany(company): Promise<Posting[]> {
    return await this.postingRepository
      .createQueryBuilder()
      .where('companyName = :companyname', { companyname: company })
      .getRawMany();
  }

  async getSearchStack(stack): Promise<Posting[]> {
    return await this.postingRepository
      .createQueryBuilder()
      .where('stack = :stackname', { stackname: stack })
      .getRawMany();
  }

  async updatePost(id: number, postingUpdateDto: PostingUpdateDto) {
    return await this.postingRepository.update(id, postingUpdateDto);
  }

  async deletePost(id) {
    return await this.postingRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostingDto } from './posting.dto';
import { Posting } from './posting.entity';

@Injectable()
export class PostingService {
  constructor(
    @InjectRepository(Posting)
    private readonly postingRepository: Repository<Posting>,
  ) {}

  createPost(postingDto: PostingDto) {
    return this.postingRepository.save(postingDto);
  }

  getAllPosts() {
    return this.postingRepository.find();
  }

  async getOnePost(postingId): Promise<Posting> {
    return await this.postingRepository.findOne({ where: { id: postingId } });
  }

  updatePost(id: number, postingDto: PostingDto) {
    return this.postingRepository.update(id, postingDto);
  }

  deletePost(id) {
    return this.postingRepository.delete(id);
  }
}

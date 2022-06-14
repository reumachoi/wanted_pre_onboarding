import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostingController } from './posting.controller';
import { Posting } from './posting.entity';
import { PostingService } from './posting.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posting])],
  exports: [TypeOrmModule],
  providers: [PostingService],
  controllers: [PostingController],
})
export class PostingModule {}

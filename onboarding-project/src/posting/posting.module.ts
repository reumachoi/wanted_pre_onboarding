import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from 'src/company/company.module';
import { PostingController } from './posting.controller';
import { Posting } from './posting.entity';
import { PostingService } from './posting.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posting]), CompanyModule],
  exports: [TypeOrmModule],
  providers: [PostingService],
  controllers: [PostingController],
})
export class PostingModule {}

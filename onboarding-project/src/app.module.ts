import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostingModule } from './posting/posting.module';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    PostingModule,
    CompanyModule,
    UserModule,
  ],
  exports: [CompanyModule],
})
export class AppModule {}

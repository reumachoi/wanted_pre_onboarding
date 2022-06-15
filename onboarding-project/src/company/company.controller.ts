import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CompanyDto } from './company.dto';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post()
  createCompany(@Body() companyDto: CompanyDto) {
    return this.companyService.createCompany(companyDto);
  }

  @Get(':id')
  getOneCompany(@Param('id') companyId: string) {
    return this.companyService.getOneCompany(companyId);
  }
}

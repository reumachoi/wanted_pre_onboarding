import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CompanyDto } from './company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async createCompany(companyDto: CompanyDto) {
    return await this.companyRepository.save(companyDto);
  }

  async getAllCompany() {
    return await this.companyRepository.find();
  }

  async getOneCompany(companyId): Promise<Company> {
    return await this.companyRepository.findOne({
      where: { companyId: companyId },
    });
  }

  async updateCompany(id: number, companyDto: CompanyDto) {
    return await this.companyRepository.update(id, companyDto);
  }

  async deleteCompany(id) {
    return await this.companyRepository.delete(id);
  }
}

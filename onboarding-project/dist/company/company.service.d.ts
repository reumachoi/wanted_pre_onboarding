import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CompanyDto } from './company.dto';
export declare class CompanyService {
    private companyRepository;
    constructor(companyRepository: Repository<Company>);
    createCompany(companyDto: CompanyDto): Promise<CompanyDto & Company>;
    getAllCompany(): Promise<Company[]>;
    getOneCompany(companyId: any): Promise<Company>;
    updateCompany(id: number, companyDto: CompanyDto): Promise<import("typeorm").UpdateResult>;
    deleteCompany(id: any): Promise<import("typeorm").DeleteResult>;
}

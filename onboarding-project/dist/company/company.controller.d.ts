import { CompanyDto } from './company.dto';
import { CompanyService } from './company.service';
export declare class CompanyController {
    private companyService;
    constructor(companyService: CompanyService);
    createCompany(companyDto: CompanyDto): Promise<CompanyDto & import("./company.entity").Company>;
    getOneCompany(companyId: string): Promise<import("./company.entity").Company>;
}

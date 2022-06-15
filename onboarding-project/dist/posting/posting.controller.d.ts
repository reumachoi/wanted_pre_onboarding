import { CompanyService } from 'src/company/company.service';
import { PostingCreateDto } from './dto/posting.create.dto';
import { PostingUpdateDto } from './dto/posting.update.dto';
import { Posting } from './posting.entity';
import { PostingService } from './posting.service';
export declare class PostingController {
    private postingService;
    private companyService;
    constructor(postingService: PostingService, companyService: CompanyService);
    createPost(postingCreateDto: PostingCreateDto): Promise<Posting>;
    getListPost(): Promise<any[]>;
    getSearchCompany(keyword: string): Promise<Posting[]>;
    updatePost(postingId: string, postingUpdateDto: PostingUpdateDto): Promise<import("typeorm").UpdateResult>;
    deletePost(postingId: number): Promise<import("typeorm").DeleteResult>;
    getPostingDetail(id: number): Promise<Posting[]>;
}

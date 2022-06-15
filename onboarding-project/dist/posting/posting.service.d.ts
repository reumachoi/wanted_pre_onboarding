import { Repository } from 'typeorm';
import { Posting } from './posting.entity';
import { PostingUpdateDto } from './dto/posting.update.dto';
export declare class PostingService {
    private readonly postingRepository;
    constructor(postingRepository: Repository<Posting>);
    createPost(posting: Posting): Promise<Posting>;
    getAllPosts(): Promise<any[]>;
    getSearchCompany(company: any): Promise<Posting[]>;
    getPostingDetail(idx: any): Promise<Posting[]>;
    updatePost(id: number, postingUpdateDto: PostingUpdateDto): Promise<import("typeorm").UpdateResult>;
    deletePost(id: any): Promise<import("typeorm").DeleteResult>;
}

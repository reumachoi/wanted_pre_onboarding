import { Repository } from 'typeorm';
import { PostingDto } from './posting.dto';
import { Posting } from './posting.entity';
export declare class PostingService {
    private readonly postingRepository;
    constructor(postingRepository: Repository<Posting>);
    createPost(postingDto: PostingDto): Promise<PostingDto & Posting>;
    getAllPosts(): Promise<Posting[]>;
    getOnePost(postingId: any): Promise<Posting>;
    updatePost(id: number, postingDto: PostingDto): Promise<import("typeorm").UpdateResult>;
    deletePost(id: any): Promise<import("typeorm").DeleteResult>;
}

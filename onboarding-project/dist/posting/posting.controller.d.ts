import { PostingDto } from './posting.dto';
import { PostingService } from './posting.service';
export declare class PostingController {
    private postingService;
    constructor(postingService: PostingService);
    create(postingDto: PostingDto): Promise<PostingDto & import("./posting.entity").Posting>;
    getList(): Promise<import("./posting.entity").Posting[]>;
    getOne(postingId: number): Promise<import("./posting.entity").Posting>;
    setOne(postingId: number, postingDto: PostingDto): Promise<import("typeorm").UpdateResult>;
    removeOne(postingId: number): Promise<import("typeorm").DeleteResult>;
}

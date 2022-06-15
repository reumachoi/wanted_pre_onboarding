import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: User): Promise<User>;
    getOneUser(userName: any): Promise<User>;
}

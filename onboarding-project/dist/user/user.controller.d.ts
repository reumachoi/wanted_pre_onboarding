import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(user: User): Promise<User>;
    getOneUser(userName: string): Promise<User>;
}

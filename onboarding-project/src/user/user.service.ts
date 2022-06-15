import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: User) {
    return await this.userRepository.save(user);
  }

  async getOneUser(userName): Promise<User> {
    return await this.userRepository.findOne(userName);
  }
}

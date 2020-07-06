import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository, InsertResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  getUserById(id: number) : Promise<User> {
    return this.userRepo.findOne(id);
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepo.find({
      relations: ['book']
    });
  }

  addUser(newUser: User): Promise<InsertResult> {
    return this.userRepo.insert(newUser);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Staff, RoleName } from '../entities/staff.entity';
import { createHash } from 'crypto';

const md5Password = (password: string) => {
  const md5 = createHash('md5');
  return md5.update(password).digest('hex');
};

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Staff) private readonly staffRepo: Repository<Staff>,
    private readonly jwtService: JwtService,
  ) {}

  async registerStaff(staff: Staff): Promise<number> {
    const newStaff = this.staffRepo.create();
    newStaff.userName = staff.userName;
    newStaff.password = md5Password(staff.password);
    newStaff.role = staff.role;
    const result = await this.staffRepo.save(newStaff);

    return result.id;
  }

  async loginStaff(userName: string, password: string): Promise<any> | never {
    const cryptedPwd = md5Password(password);
    const staff = await this.staffRepo.findOne({
      userName,
      password: cryptedPwd,
    });
    if (staff) {
      return {
        jwt: this.jwtService.sign({
          userName: staff.userName,
          role: staff.role,
        }),
        role: RoleName[staff.role],
      };
    }

    throw new NotFoundException();
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Staff } from 'src/entities/staff.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  registerStaff(@Body() staff: Staff): Promise<number> {
    return this.authService.registerStaff(staff);
  }

  @Post('login')
  loginStaff(@Body() body: {userName: string, password: string}): Promise<any> {
    return this.authService.loginStaff(body.userName, body.password);
  }
}

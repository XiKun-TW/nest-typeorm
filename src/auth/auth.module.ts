import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Staff } from '../entities/staff.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Staff]),
    JwtModule.register({
      secret: 'nest-demo'
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}

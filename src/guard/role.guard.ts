import {
  Injectable,
  CanActivate,
  ExecutionContext,
  SetMetadata,
  CustomDecorator,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/entities/staff.entity';

export const Roles = (roles: Role[]): CustomDecorator<string> =>
  SetMetadata('roles', roles);

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<number[]>('roles', context.getHandler());

    // No rule set.
    if (!roles) return false;

    const headers = context.switchToHttp().getRequest().headers;

    const auth = headers.authorization
      ? headers.authorization.split(' ')[1]
      : '';

    const userData = new JwtService({ secret: 'nest-demo' }).decode(auth);

    // staff user
    if (!!userData && typeof userData['role'] === 'number' && roles) {
      return roles.some(role => role === userData['role']);
    }

    return false;
  }
}

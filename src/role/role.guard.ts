import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UserService
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get<string[]>('roles', context.getHandler());
    if (!role) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    return this.matchRoles(role, request);
  }

  async matchRoles(roles, req) {
    const user = await this.userService.findUserById(req.cookie['access_token'])
    if (roles == 'User') {
      return true;
    }
    if (user.isAdmin && (roles == 'Admin')) {
      return true;
    }
    return false;
  }
}

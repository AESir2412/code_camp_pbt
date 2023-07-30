import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { PostDto } from 'src/post/post.dto';
import { PostService } from 'src/post/post.service';
import { UserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Controller('dashboard')
export class DashboardController {
    constructor(
        private readonly userService: UserService,
        private readonly postService: PostService,
    ){};

    @Get('todayusers')
    async returnAllTodayUser(): Promise<UserDto[]> {
        return this.userService.findAllToday()
    }

    @Get('users')
    async returnAllUser(): Promise<UserDto[]> {
        return this.userService.findAllUser()
    }

    @Get('posts')
    async returnAllPosts(): Promise<any>{
        return this.postService.getAllPosts();
    }

    @Get('usersbyEmail')
    async returnUserScore(email:string): Promise<number> {
        return (await this.userService.findUserByEmail(email)).score
    }

}

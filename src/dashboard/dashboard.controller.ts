import { Body, Controller, Get, Post } from '@nestjs/common';
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

    @Get('dashboard/todayusers')
    async returnAllTodayUser(): Promise<UserDto[]> {
        return this.userService.findAllToday()
    }

    // @Get('dashboard/posts')
    // async returnAllPosts(): Promise<PostDto[]> {
    //     return this.postService.findAllPost()
    // }


}

import { Body, Controller, Get, Header, Headers, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import mongoose from 'mongoose';
import { PostService } from 'src/post/post.service';
import { Role } from 'src/role/role.decorator';
import { RoleGuard } from 'src/role/role.guard';
import { UserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Role('Admin')
// @UseGuards(RoleGuard)
@Controller('test')
export class TestController {
    constructor(
        private userService: UserService,
        private postServie: PostService
    ) {}

    @Get('user/today')
    today() {
        const list = this.userService.findAllToday();
        return list;
    }

    @Get('user/email')
    async email() {
        const email = '21020553@vnu.edu.vn';
        return await this.userService.findUserByEmail(email);
    }

    @Get('user/username')
    async username() {
        const username = '21020553';
        return await this.userService.findUserByUsername(username);
    }

    // @Post('user/create')
    // async createTestUser(@Body() req): Promise<UserDto> {
    //     return await this.userService.createUser({
    //         _id: new mongoose.Types.ObjectId(),
    //         username: req.name,
    //         isAdmin: false,
    //         email: req.email,
    //     });
    // }
    
    @Post('post/create')
    async createTestPost(@Body() req): Promise<any> {
        console.log(req);
        const author_id = (await this.userService.findUserByUsername(req.name))._id;
        return await this.postServie.createPost({
            _id: new mongoose.Types.ObjectId(),
            owner: author_id,
            upvoters: [],
            downvoters: [],
            comments: [],
            text: req.text,
            timestamp: new Date()
        })
    }

    @Post('post/getByAuthor')
    async getPostThroughAuthor(@Body() req): Promise<any> {
        return await this.postServie.getPostbyAuthor((await this.userService.findUserByUsername(req.name))._id.toString());
    }

    @Get('post/all')
    getAllPost() {
        return this.postServie.getAllPosts();
    }

    @Get('cookie')
    getCookie(@Req() req: Request) {
        return req.cookies['access'];
    }
}

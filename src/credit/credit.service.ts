import { Injectable } from '@nestjs/common';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';
import { GpaService } from 'src/gpa/gpa.service';

@Injectable()
export class CreditService {
    constructor(
        private userService: UserService,
        private postService: PostService,
        private gpaService: GpaService
    ) {}

    async score(userId: string) {
        const gpa = (await this.gpaService.findGPAByID(userId)).score;
        const totalPost = (await this.postService.getAllPostsByUserId(userId)).length;

        const score = gpa + totalPost * 0.5;
        
        await this.userService.updateScore(userId, score);
    }

    
}

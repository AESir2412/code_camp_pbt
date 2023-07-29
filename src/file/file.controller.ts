import { Controller, Post, Get, UseInterceptors, StreamableFile,UploadedFile, ParseFilePipe, FileTypeValidator, HttpStatus, ParseFilePipeBuilder, Res} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('file')
export class FileController {
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file)
    }

    // @Post('file')
    // uploadFileandPassValidation(
    //     @UploadedFile(
    //         new ParseFilePipe({
    //             validators: [
    //                 new FileTypeValidator({ fileType: 'application/pdf'}),
    //             ]
    //         })
    //     )
    //     file: Express.Multer.File
    // ) {
    //     return {
    //         file: file.buffer.toString()
    //     }
    // }

    @Post('file')
    @UseInterceptors(FileInterceptor("file"))
    uploadFileandBuildValidation(
        @UploadedFile(
            new ParseFilePipeBuilder()
                .addFileTypeValidator({
                    fileType: 'application/pdf'
                })
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
                }),
        ) file: Express.Multer.File
    ) {
        console.log(file.buffer.toJSON())
    }

    @Get()
    getFile(): StreamableFile {
        const file = createReadStream(join(process.cwd(), 'package.json'));
        return new StreamableFile(file);
    }

    
}

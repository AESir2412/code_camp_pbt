import { Injectable } from '@nestjs/common';
import * as mongoose from "mongoose"
import path = require("path")
import crypto = require("crypto")
import multer = require("multer")
import {GridFsStorage} from "multer-gridfs-storage"
import Grid = require("gridfs-stream")
// import methodOverride = require('method-override')

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  initGfs() {
    //Init stream
    let gfs = Grid(mongoose.createConnection(process.env.MONGODB_URL).db, mongoose.mongo);
    gfs.collection('uploads');
  }

  createStorageEngine(){
    const storage = new GridFsStorage({
      url: process.env.MONGODB_URL,
      file: (req, file) => {
        return new Promise((resolve, reject) => {
          crypto.randomBytes(16, (err, buf) => {
            if (err) {
              return reject(err);
            }
            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
              filename: filename,
              bucketName: 'uploads'
            };
            resolve(fileInfo);
          });
        });
      }
    });
    const upload = multer({ storage });
    return upload
  }
}

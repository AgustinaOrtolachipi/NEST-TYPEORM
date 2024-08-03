import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { Photo } from './photo.entity';
import { CreatePhotoDto } from './dto/photo.create.dto';
import { UpdatePhotoDto } from './dto/photo.update.dto';

@Injectable()
export class PhotoService {
    constructor(
        @Inject('PHOTO_REPOSITORY')
        private photoRepository: Repository<Photo>,
    ) { }

    async findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
    }
    async createOne(createPhotoDto: CreatePhotoDto): Promise<Photo> {
        const photo = this.photoRepository.create(createPhotoDto);

        return this.photoRepository.save(photo);
    }
    async updanteOne(id: number, updatePhotoDto: UpdatePhotoDto): Promise<UpdateResult> {
        return this.photoRepository.update(Number(id), updatePhotoDto)
    }
}
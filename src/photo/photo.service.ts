import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
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
        return await this.photoRepository.find();
    }
    async createOne(createPhotoDto: CreatePhotoDto): Promise<Photo> {
        const photo = this.photoRepository.create(createPhotoDto);

        return await this.photoRepository.save(photo);
    }
    async updanteOne(id: number, updatePhotoDto: UpdatePhotoDto) {
        return await this.photoRepository.update(Number(id), updatePhotoDto)
    }
    async deleteOne(id: number) {
        return this.photoRepository.delete(id)
    }
}
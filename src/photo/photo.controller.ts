import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/photo.create.dto';
import { UpdatePhotoDto } from './dto/photo.update.dto';

@Controller("/photo")
export class PhotoController {
    constructor(private readonly photoService: PhotoService) { }

    @Get()
    getAll() {
        return this.photoService.findAll();
    }
    @Post()
    createOne(@Body() createPhotoDto: CreatePhotoDto) {
        return this.photoService.createOne(createPhotoDto)
    }
    @Patch("/:id")
    updateOne(
        @Param('id', ParseIntPipe) id: number,
        @Body() updatePhotoDto: UpdatePhotoDto

    ) {
        return this.photoService.updanteOne(id, updatePhotoDto)
    }

    @Delete("/:id")
    deleteOne(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.photoService.deleteOne(id)
    }

}
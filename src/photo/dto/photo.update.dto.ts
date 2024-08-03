import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotoDto } from './photo.create.dto';

export class UpdatePhotoDto extends PartialType(CreatePhotoDto) { }

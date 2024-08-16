import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './author.create.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) { }

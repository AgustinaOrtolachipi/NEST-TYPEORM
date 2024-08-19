import { Body, Controller, Get, Post, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/author.create.dto';
import { Author } from './entities/author.entity';
import { UpdateAuthorDto } from './dto/author.update.dto';

@Controller('/authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) { }

  @Get()
  getAll() {
    return this.authorService.findAll();
  }

  @Get(':id/photos')
  async getAuthorWithPhotos(@Param('id', ParseIntPipe) id: number): Promise<Author> {
    return this.authorService.findAuthorWithPhotos(id);
  }


  @Post()
  createOne(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.createOne(createAuthorDto);
  }

  @Patch("/:id")
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAuthorDto: UpdateAuthorDto
  ) {
    return this.authorService.updateOne(id, updateAuthorDto)
  }


}

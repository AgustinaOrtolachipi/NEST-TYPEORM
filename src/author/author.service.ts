import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
import { CreateAuthorDto } from './dto/author.create.dto';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_REPOSITORY')
    private authorRepository: Repository<Author>,
  ) { }

  // Obtener todos los autores
  async findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  // Crear un nuevo autor
  async createOne(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorRepository.create(createAuthorDto);
    return this.authorRepository.save(author);
  }

  // Método para obtener un autor con todas sus fotos
  async findAuthorWithPhotos(authorId: number): Promise<Author> {
    const author = await this.authorRepository.findOne({
      where: { id: authorId },
      relations: ['photos'], // Incluye las fotos relacionadas
    });

    if (!author) {
      throw new NotFoundException(`Author with ID ${authorId} not found`);
    }

    return author;
  }
}

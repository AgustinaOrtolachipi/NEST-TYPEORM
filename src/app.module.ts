import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [PhotoModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

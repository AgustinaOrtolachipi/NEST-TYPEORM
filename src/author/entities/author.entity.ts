import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Photo } from '@/photo/entities/photo.entity';

//Define la entidad Author, que corresponde a la tabla 'author' en la base de datos
@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 100 })
    name: string

    // Relación uno a muchos con la entidad Photo. Un autor puede tener muchas fotos
    @OneToMany(() => Photo, photo => photo.author)
    photos: Photo[];
}


//@Entity() indica que la clase Author representa una entidad en la base de datos.La relación uno a muchos se establece con el decorador @OneToMany, donde se define que un Author puede estar asociado con muchas Photo.
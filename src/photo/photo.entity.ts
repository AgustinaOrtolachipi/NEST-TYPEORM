import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// El decorador @Entity indica que esta clase representa una entidad en la base de datos
@Entity()
export class Photo {
    // Define la columna 'id' como la clave primaria generada automáticamente
    @PrimaryGeneratedColumn()
    id: number;

    // Define la columna 'name' con una longitud máxima de 500 caracteres
    @Column({ length: 500 })
    name: string;

    // Define la columna 'description' como un texto de longitud variable
    @Column('text')
    description: string;

    // Define la columna 'filename' como una cadena de texto (varchar por defecto)
    @Column()
    filename: string;

    // Define la columna 'views' como un entero
    @Column('int')
    views: number;

    // Define la columna 'isPublished' como un booleano
    @Column()
    isPublished: boolean;
}
import { IsString, IsInt, IsBoolean, Length } from 'class-validator';

export class CreatePhotoDto {
    @IsString()
    @Length(1, 500)
    name: string;

    @IsString()
    description: string;

    @IsString()
    filename: string;

    @IsInt()
    views: number;

    @IsBoolean()
    isPublished: boolean;

    @IsInt()
    authorId: number;

}

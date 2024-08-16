import { IsString, Length } from 'class-validator';

export class CreateAuthorDto {
    @IsString()
    @Length(1, 100)
    name: string;
}


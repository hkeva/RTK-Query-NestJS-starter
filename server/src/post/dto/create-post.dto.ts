import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  imageFile: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  commentIds: string[];

  @IsOptional()
  scheduledTime: string;
}
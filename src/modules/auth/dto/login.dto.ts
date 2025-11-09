import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @MinLength(6)
  readonly username: string;

  @IsString()
  @MinLength(6)
  readonly password: string;
}

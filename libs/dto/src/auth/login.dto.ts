import { IsString } from 'class-validator';

export class LoginRequestDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}

export class LoginResponseDto {
  success: boolean;
  message: string;
  token: string;
}

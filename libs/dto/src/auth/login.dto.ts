import { IsBoolean, IsString } from 'class-validator';

export class LoginRequestDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}

export class LoginResponseDto {
  @IsBoolean()
  success: boolean;

  @IsString()
  message: string;

  @IsString()
  token: string;
}

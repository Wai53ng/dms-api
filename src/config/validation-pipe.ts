import { ValidationPipe } from '@nestjs/common';

export function getValidationPipe(env: string): ValidationPipe {
  return new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
    disableErrorMessages: env === 'production',
  });
}

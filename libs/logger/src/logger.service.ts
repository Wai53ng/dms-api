import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService extends ConsoleLogger {
  module: string = '';

  logInfo(name: string, message: string) {
    this.log(`INFO: ${name} - ${message}`, this.module);
  }

  logError(name: string, message: any) {
    this.error(`ERROR: ${name} - ${message}`, this.module);
  }
}

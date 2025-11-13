import { Controller, Get } from '@nestjs/common';

@Controller('conceitos-cli')
export class ConceitosCliController {
  @Get()
  home(): string {
    return 'conceitos cli';
  }
}

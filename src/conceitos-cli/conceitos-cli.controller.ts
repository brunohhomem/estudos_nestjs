import { Controller, Get } from '@nestjs/common';
import { ConceitosCliService } from './conceitos-cli.service';

@Controller('conceitos-cli')
export class ConceitosCliController {
  constructor(private readonly conceitosCliService: ConceitosCliService) { }

  @Get()
  home(): string {
    return this.conceitosCliService.solucionaCli();
  }
}

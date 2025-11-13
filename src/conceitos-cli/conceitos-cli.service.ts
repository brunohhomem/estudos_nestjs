import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosCliService {
  solucionaCli(): string {
    return 'home do conceitos cli';
  }
}

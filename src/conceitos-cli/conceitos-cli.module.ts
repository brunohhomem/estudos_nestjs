import { Module } from '@nestjs/common';
import { ConceitosCliController } from './conceitos-cli.controller';

@Module({
  controllers: [ConceitosCliController]
})
export class ConceitosCliModule {

}

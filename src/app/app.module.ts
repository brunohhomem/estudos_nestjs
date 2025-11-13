import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModule } from 'src/conceitos-manual/conceitos-manual.module';
import { ConceitosCliModule } from 'src/conceitos-cli/conceitos-cli.module';

@Module({
  imports: [ConceitosManualModule, ConceitosCliModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

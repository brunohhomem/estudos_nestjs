import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll() {
    return 'retornar tudo';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `retorna id: ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `retorna id: ${id}`;
  }
}

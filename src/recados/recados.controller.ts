import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { RecadosService } from './recados.service'

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) { }

  @Get()
  findAll() {
    return this.recadosService.hello()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `retorna id: ${id}`
  }

  @Post()
  create(@Body() body: any) {
    return body
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `retorna id: ${id}`
  }
}

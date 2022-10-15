import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Continent } from './continent.models';
import { Request } from 'express';

@Controller('/continent')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createContinent(@Body() continentDTO: Continent) {
    return this.appService.creatContinent(continentDTO);
  }

  @Get()
  readContinent() {
    return this.appService.readContinent();
  }

  @Get('filter')
  async backend(@Req() req: Request) {
    let options = {};

    if (req.query.s) {
      options = {
        $or: [
          { cname: new RegExp(req.query.s.toString(), 'i') },
          { ccode: new RegExp(req.query.s.toString(), 'i') },
        ],
      };
    }

    const data = this.appService.find(options);
    return data;
  }
}

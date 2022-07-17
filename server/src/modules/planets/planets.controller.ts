import { Controller, Get, Param } from '@nestjs/common';

import planets, { Planet } from '../../planets';

@Controller('planets')
export class PlanetsController {
  constructor() {}

  @Get()
  async index(): Promise<Planet[]> {
    return planets;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Planet> {
    return planets.find((planet) => planet.id === parseInt(id));
  }
}

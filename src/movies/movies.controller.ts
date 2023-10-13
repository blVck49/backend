import { Body, Controller, Render } from '@nestjs/common';
import { Get, Post } from "@nestjs/common";
import { MoviesService } from './movies.service';
import { createDto } from './dto';

@Controller('movies')
export class MoviesController {
    constructor(private MoviesService: MoviesService){}

    @Get("/")
    @Render("index")
    async fetch() {

        const doc = this.MoviesService.list()

        const myPromise = new Promise((resolve) => {
            setTimeout(() => {
              resolve(doc);
            }, 2000); // Simulated delay of 2 seconds
          });
          
          return {result: await myPromise}

    }

    @Post("/create")
    create(@Body() dto: createDto) {
        return this.MoviesService.create(dto)
    }
}

import { Body, Controller, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { Get, Post } from "@nestjs/common";
import { MoviesService } from './movies.service';
import { createDto } from './dto';

@Controller('movies')
export class MoviesController {
    constructor(private MoviesService: MoviesService){}

    @Get("/")
    @Render("index")
    async fetch() {
    //fetch(@Res() res: Response) {
        //return this.MoviesService.list()
        //return {subtitle: this.MoviesService.list()}

        //return { message: "Hello world"}
        const k = this.MoviesService.list()

        const myPromise = new Promise((resolve) => {
            setTimeout(() => {
              resolve(k);
            }, 2000); // Simulated delay of 2 seconds
          });

          const result = await myPromise

          return {result: result}


        /*
          [
            {
                name
                id
                image
            },
          ]

        */
          // Render the result template with the resolved Promise value
        //   return myPromise.then((result) => {
        //     res.render('array', { myArray: result });
        //   });

        //   const contentArray = [
        //     { data: 'first' },
        //     { data: 'second' },
        //     { data: 'third' },
        //   ];

        // return res.render("array", { myArray: contentArray,})
    }

    @Post("/create")
    create(@Body() dto: createDto) {
        return this.MoviesService.create(dto)
    }
}

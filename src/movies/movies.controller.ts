import { Controller } from '@nestjs/common';
import { Get } from "@nestjs/common";
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private MoviesService: MoviesService){}

    @Get("/")
    fetch() {
        return this.MoviesService.list()
    }
}

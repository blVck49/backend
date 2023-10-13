import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { prismaService } from '../prisma/prisma.service';
import { createDto } from './dto';

@Injectable()
export class MoviesService {
    constructor(private prisma: prismaService) {}

    async create(dto: createDto,) {
        try {
            const movie = await this.prisma.movie.create({data: dto})
            return movie
        } catch (error) {
            throw new InternalServerErrorException("Internal Server Error", { cause: new Error(), description: error.message||error})
        }        
    }

    async list() {
        try {

            const doc = await this.prisma.movie.findMany()

            const result: Array<Object> = doc

            async function shuffleMovies(movies: Array<Object>) {
                for (let i = 0; i < movies.length - 1; i++) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [movies[i], movies[j]] = [movies[j], movies[i]];
                }
            }

            await shuffleMovies(result);

            const selectedElements = result.slice(0, 10);

            return selectedElements
                

        } catch (error) {
            return new InternalServerErrorException("Internal Server Error", { cause: new Error(), description: error.message||error})
        }
    }
}

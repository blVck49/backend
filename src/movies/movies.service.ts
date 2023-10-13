import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from "axios"
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
            // const url = "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
            // const doc = await axios({
            //     method: "get",
            //     url: url,
            // })

            const doc = await this.prisma.movie.findMany()

            const result = doc


            async function shuffleMovies(movies: Array<Object>) {
                for (let i = 0; i < movies.length - 1; i++) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [movies[i], movies[j]] = [movies[j], movies[i]];
                }
            }

            await shuffleMovies(result);

            const selectedElements = result.slice(0, 10);

            //console.log(selectedElements)
            return selectedElements
        

        //     const rows = selectedElements.map(s => {
        //         //console.log(s)
        //         return `<t>
        //     <td>${s.name}</td>
        //     <td>${s.image}</td>
        //   </tr>`
        //     })

        //     return rows

            

        } catch (error) {
            return new InternalServerErrorException("Internal Server Error", { cause: new Error(), description: error.message||error})
        }
    }
}

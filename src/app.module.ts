import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { prismaModule } from './prisma/prisma.module';

@Module({
  imports: [MoviesModule, prismaModule],
})
export class AppModule {}

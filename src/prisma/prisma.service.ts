import { Injectable } from '@nestjs/common';
import { PrismaClient } from "@prisma/client"


@Injectable()
export class prismaService extends PrismaClient  {
    constructor() {
        super({
            datasources: {
                db: {
                    url: "postgres://lexryovm:ydDI8v8Qe1eNz3CrS3eSnjytA4GXaCCO@flora.db.elephantsql.com/lexryovm"
                }

            }
        })
    }
}

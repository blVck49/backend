import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from "cors";


// var whitelist = ['http://localhost',]
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(3000);


}
bootstrap();

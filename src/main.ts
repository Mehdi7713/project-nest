import { NestFactory } from '@nestjs/core';
import { StationModule } from './Station.module';

async function bootstrap() {
	const port = process.env.PORT || 8080
  // const port = 3000
  const app = await NestFactory.create(StationModule);
  await app.listen(port);
}
bootstrap();



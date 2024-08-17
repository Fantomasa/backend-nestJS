import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ["debug", "log", "verbose", "error"] });

  app.enableCors();

  app.setGlobalPrefix("api/v1");
  await app.listen(3000);
}
bootstrap();

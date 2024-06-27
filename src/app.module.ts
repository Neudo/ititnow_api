import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { WebhookModule } from './webhook/webhook.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from '@wahyubucil/nestjs-zod-openapi';

@Module({
  imports: [EventsModule, WebhookModule, UsersModule, PrismaModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}

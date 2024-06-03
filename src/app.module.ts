import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { WebhookModule } from './webhook/webhook.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EventsModule, WebhookModule, UsersModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

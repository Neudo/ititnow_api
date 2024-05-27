import { Module } from '@nestjs/common';
import { FavoritesModule } from './favorites/favorites.module';
import { EventsModule } from './events/events.module';
import { WebhookModule } from './webhook/webhook.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FavoritesModule, EventsModule, WebhookModule, UsersModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

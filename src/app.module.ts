import { Module } from '@nestjs/common';
import { FavoritesModule } from './favorites/favorites.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [FavoritesModule, EventsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

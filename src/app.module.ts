import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { FavoritesModule } from './favorites/favorites.module';



@Module({
  imports: [EventModule, FavoritesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

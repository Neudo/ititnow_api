import { Module } from '@nestjs/common';
import { WebhooksController } from './webhook.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [WebhooksController],
  providers: [],
})
export class WebhookModule {}

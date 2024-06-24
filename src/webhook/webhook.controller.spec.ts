import { Test, TestingModule } from '@nestjs/testing';
import { WebhooksController } from './webhook.controller';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('WebhookController', () => {
  let controller: WebhooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhooksController],
      providers: [UsersService, PrismaService],
    }).compile();

    controller = module.get<WebhooksController>(WebhooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

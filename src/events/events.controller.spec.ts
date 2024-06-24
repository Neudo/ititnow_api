import { Test, TestingModule } from '@nestjs/testing';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { PrismaService } from '../prisma/prisma.service';

describe('EventsController', () => {
  let controller: EventsController;
  let eventsService: EventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [EventsService, PrismaService],
    }).compile();

    controller = module.get<EventsController>(EventsController);
    eventsService = module.get<EventsService>(EventsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return an array of events', async () => {
    const result = [
      {
        id: '1',
        title: 'event1',
        image: null,
        description: 'description1',
        startDate: new Date(),
        endDate: new Date(),
        location: 'location1',
        author: 'author1',
        contact: 'contact1',
        userId: 'userId1',
      },
      {
        id: '2',
        title: 'event2',
        image: null,
        description: 'description2',
        startDate: new Date(),
        endDate: new Date(),
        location: 'location2',
        author: 'author2',
        contact: 'contact2',
        userId: 'userId2',
      },
    ];
    jest
      .spyOn(eventsService, 'getEvents')
      .mockImplementation(() => Promise.resolve(result));

    expect(await eventsService.getEvents()).toBe(result);
  });
  it('should return an event', async () => {
    const result = {
      id: '1',
      title: 'event1',
      image: null,
      description: 'description1',
      startDate: new Date(),
      endDate: new Date(),
      location: 'location1',
      author: 'author1',
      contact: 'contact1',
      userId: 'userId1',
    };
    jest
      .spyOn(eventsService, 'getEvent')
      .mockImplementation(() => Promise.resolve(result));
  });
  it('should delete an event', async () => {
    const result = { message: 'Évènement supprimé avec succès' };
    jest
      .spyOn(eventsService, 'deleteEvent')
      .mockImplementation(() => Promise.resolve(result));

    expect(await controller.remove('1')).toBe(result);
  });
  it('should update an event', async () => {
    const result = { message: 'Évènement mis à jour avec succès' };
    jest
      .spyOn(eventsService, 'updateEvent')
      .mockImplementation(() => Promise.resolve(result));
  });
});

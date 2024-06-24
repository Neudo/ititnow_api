import { Test, TestingModule } from '@nestjs/testing';
import { EventsService } from './events.service';
import { PrismaService } from '../prisma/prisma.service';

describe('EventsService', () => {
  let service: EventsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsService, PrismaService],
    }).compile();

    service = module.get<EventsService>(EventsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
      .spyOn(service, 'getEvents')
      .mockImplementation(() => Promise.resolve(result));

    expect(await service.getEvents()).toBe(result);
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
      .spyOn(service, 'getEvent')
      .mockImplementation(() => Promise.resolve(result));

    expect(await service.getEvent('1')).toBe(result);
  });

  it('should delete an event', async () => {
    const result = { message: 'Évènement supprimé avec succès' };
    jest
      .spyOn(service, 'deleteEvent')
      .mockImplementation(() => Promise.resolve(result));

    expect(await service.deleteEvent('1')).toBe(result);
  });

  it('should update an event', async () => {
    const result = { message: 'Évènement mis à jour avec succès' };
    jest
      .spyOn(service, 'updateEvent')
      .mockImplementation(() => Promise.resolve(result));

    expect(
      await service.updateEvent('1', {
        id: '1',
        title: 'updated title',
        image: 'okok',
        description: 'description1',
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        location: 'location1',
        author: 'author1',
        contact: 'contact1',
        userId: 'userId1',
      }),
    ).toBe(result);
  });

  it('should throw an error if event is not found', async () => {
    jest
      .spyOn(service, 'getEvent')
      .mockImplementation(() => Promise.reject(new Error('Event not found')));

    await expect(service.getEvent('invalid_id')).rejects.toThrow(
      'Event not found',
    );
  });
});

import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async createEvent(data: CreateEventDto) {
    const event = await this.prisma.events.create({
      data: {
        id: data.id,
        title: data.title,
        description: data.description,
        startDate: data.startDate,
        image: data.image,
        endDate: data.endDate,
        location: data.location,
        author: data.author,
        contact: data.contact,
        user: { connect: { id: '9aaf8bf0-c418-4521-a515-e8ce5c2c1ac4' } },
      },
    });
    return event;
  }

  async getEvent(id: string) {
    const event = await this.prisma.events.findUnique({
      where: { id },
    });
    return event;
  }

  async updateEvent(id: string, data: CreateEventDto) {
    const event = await this.prisma.events.update({
      where: { id },
      data: {
        id: data.id,
        title: data.title,
        description: data.description,
        startDate: data.startDate,
        image: data.image,
        endDate: data.endDate,
        location: data.location,
        author: data.author,
        contact: data.contact,
        user: { connect: { id: '2343' } },
      },
    });
    return event;
  }

  async deleteEvent(id: string) {
    const event = await this.prisma.events.delete({
      where: { id },
    });
    return event;
  }

  async getEvents() {
    const events = await this.prisma.events.findMany();
    return events;
  }
}

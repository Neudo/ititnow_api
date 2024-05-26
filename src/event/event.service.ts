import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Events, Prisma } from '@prisma/client';


@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) { }
  getEvent() {
    return [
      {
        id: 1,
        title: 'Event 1'
      }
    ]
  }
  async events() {
    return this.prisma.events.findMany();
  }

  async event({ data }: { data: Prisma.EventsCreateInput}) {
    const event = await this.prisma.events.create({
      data
    })
    console.log("voici event : ", event);
    return event;
  }
}

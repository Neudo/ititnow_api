import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { Events } from '@prisma/client';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}
  @Get()
  getAllEvents() {
    return this.eventService.events();
  }

  @Get()
  getEvent() {
    return this.eventService.getEvent();
  }

  @Post()
  event(@Body() data: Events) {
    return this.eventService.event({ data });
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    try {
      const validatedData = CreateEventDto.parse(createEventDto);
      return await this.eventsService.createEvent(validatedData);
    } catch (e: any) {
      throw new BadRequestException(e.errors);
    }
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: CreateEventDto,
  ) {
    try {
      const validateData = CreateEventDto.parse(updateEventDto);
      return await this.eventsService.updateEvent(id, validateData);
    } catch (e: any) {
      throw new BadRequestException(e.errors);
    }
  }
  @Get()
  findAll() {
    return this.eventsService.getEvents();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.getEvent(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.deleteEvent(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto, EventDto } from './dto/create-event.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreditsGuard } from '@/credit.guard';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UseGuards(CreditsGuard)
  @ApiOperation({ summary: 'Create an event' })
  @ApiResponse({
    status: 201,
    description: 'The event has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Validation error or missing data.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. You do not have permission to create an event.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error. An unexpected error occurred.',
  })
  @ApiBody({
    type: CreateEventDto,
    description: 'Json structure for event object',
  })
  async create(@Body() createEventDto: EventDto) {
    try {
      const validatedData = CreateEventDto.zodSchema.parse(createEventDto);
      return await this.eventsService.createEvent(validatedData);
    } catch (e: any) {
      throw new BadRequestException(e.errors);
    }
  }
  @Put(':id')
  @ApiOperation({ summary: 'Update an event by ID' })
  @ApiResponse({
    status: 200,
    description: 'The event has been successfully updated.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Validation error or missing data.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. You do not have permission to update this event.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found. The event with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error. An unexpected error occurred.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: CreateEventDto,
  ) {
    try {
      const validateData = CreateEventDto.zodSchema.parse(updateEventDto);
      return await this.eventsService.updateEvent(id, validateData);
    } catch (e: any) {
      throw new BadRequestException(e.errors);
    }
  }
  @Get()
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({
    status: 204,
    description: 'The events has been successfully loaded.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. You do not have permission to see theses event.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error. An unexpected error occurred.',
  })
  findAll() {
    return this.eventsService.getEvents();
  }

  @Get('/nextEvent')
  @ApiOperation({ summary: 'Get soon event' })
  @ApiResponse({
    status: 204,
    description: 'Theses events has been successfully loaded.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. You do not have permission to see theses events.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error. An unexpected error occurred.',
  })
  findNextEvent() {
    return this.eventsService.getNextEvent();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an event by ID' })
  @ApiResponse({
    status: 200,
    description: 'The event has been successfully retrieved.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found. The event with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. You do not have permission to view this event.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error. An unexpected error occurred.',
  })
  findOne(@Param('id') id: string) {
    return this.eventsService.getEvent(id);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an event by ID' })
  @ApiResponse({
    status: 204,
    description: 'The event has been successfully deleted.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. You do not have permission to delete this event.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found. The event with the specified ID does not exist.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error. An unexpected error occurred.',
  })
  remove(@Param('id') id: string) {
    return this.eventsService.deleteEvent(id);
  }
}

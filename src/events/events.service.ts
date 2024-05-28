import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async createEvent(data: CreateEventDto) {
    try {
      await this.prisma.events.create({
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
          user: { connect: { id: data.userId } },
        },
      });
      return { message: 'Évènement créé avec succès' };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        "Une erreur est survenue lors de la création de l'évènement",
      );
    }
  }

  async updateEvent(id: string, data: CreateEventDto) {
    try {
      await this.prisma.events.update({
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
          user: { connect: { id: data.userId } },
        },
      });
      return { message: 'Évènement mis à jour avec succès' };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        "Une erreur est survenue lors de la mise à jour de l'évènement",
      );
    }
  }

  async getEvent(id: string) {
    const event = await this.prisma.events.findUnique({
      where: { id },
    });
    return event;
  }

  async deleteEvent(id: string) {
    try {
      await this.prisma.events.delete({
        where: { id },
      });
      return { message: 'Évènement supprimé avec succès' };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        "Une erreur est survenue lors de la suppression de l'évènement",
      );
    }
  }

  async getEvents() {
    const events = await this.prisma.events.findMany();
    return events;
  }
}

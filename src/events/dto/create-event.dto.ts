import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { z } from 'zod';

export const Event = z.object({
  id: z.any(),
  title: z
    .string()
    .min(10, 'Le titre doit contenir au moins 10 caractères')
    .max(70, 'Le titre ne doit pas dépasser 70 caractères')
    .openapi({ description: 'Display title of the event' }),
  image: z.string().openapi({ description: 'Not requiered' }),
  description: z
    .string()
    .max(2500, 'La description ne doit pas dépasser 2500 caractères'),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  location: z.string().max(50, 'Le lieu ne doit pas dépasser 50 caractères'),
  author: z.string().max(50, "L'auteur ne doit pas dépasser 50 caractères"),
  contact: z.string().max(75, 'Le contact ne doit pas dépasser 75 caractères'),
  userId: z.string(),
});

export class EventDto extends createZodDto(Event) {}
export class CreateEventDto extends createZodDto(Event) {}

export const GetEvent = z.object({
  events: z.array(z.string()),
});
export class GetEventsDto extends createZodDto(GetEvent) {}

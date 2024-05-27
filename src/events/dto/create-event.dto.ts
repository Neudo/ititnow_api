import { z } from 'zod';

export const CreateEventDto = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  description: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  location: z.string(),
  author: z.string(),
  contact: z.string(),
  userId: z.string(),
});

export type CreateEventDto = z.infer<typeof CreateEventDto>;

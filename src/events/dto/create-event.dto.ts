import { z } from 'zod';

// Date format YYYY-MM-DD
export const CreateEventDto = z.object({
  id: z.any(),
  title: z
    .string()
    .min(10, 'Le titre doit contenir au moins 10 caractères')
    .max(70, 'Le titre ne doit pas dépasser 70 caractères'),
  image: z.string(),
  description: z
    .string()
    .max(500, 'La description ne doit pas dépasser 500 caractères'),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  location: z.string().max(50, 'Le lieu ne doit pas dépasser 50 caractères'),
  author: z.string().max(50, "L'auteur ne doit pas dépasser 50 caractères"),
  contact: z.string().max(75, 'Le contact ne doit pas dépasser 75 caractères'),
  userId: z.string(),
});

export type CreateEventDto = z.infer<typeof CreateEventDto>;

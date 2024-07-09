import { z } from 'zod';
export const CreateUserDto = z.object({
  id: z.string(),
  email: z.string().email().min(5),
  encrypted_password: z.string(),
  name: z.string().min(2),
  nbEvents: z.number().default(0),
});

export type CreateUserDtoType = z.infer<typeof CreateUserDto>;

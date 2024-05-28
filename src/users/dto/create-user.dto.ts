import { z } from 'zod';
export const CreateUserDto = z.object({
  id: z.string(),
  email: z.string().email().min(5),
  encrypted_password: z.string(),
});

export type CreateUserDtoType = z.infer<typeof CreateUserDto>;
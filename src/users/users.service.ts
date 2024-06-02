import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateUserDto, CreateUserDtoType } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserDtoType) {
    const parsedData = CreateUserDto.parse(data);
    const user = await this.prisma.users.create({
      data: {
        id: parsedData.id,
        email: parsedData.email,
        password: parsedData.encrypted_password,
        name: 'TestName',
        avatar: 'TestAvatar',
        isAdmin: false,
      },
    });
    return user;
  }

  async getUser(id: string) {
    const user = await this.prisma.users.findUnique({
      where: { id },
    });
    return user;
  }

  async updateUser(id: string, data: CreateUserDtoType) {
    const parsedData = CreateUserDto.parse(data);

    const user = await this.prisma.users.update({
      where: { id },
      data: parsedData,
    });

    return user;
  }

  async deleteUser(id: string) {
    const user = await this.prisma.users.delete({
      where: { id },
    });
    return user;
  }

  async getUsers() {
    const users = await this.prisma.users.findMany();
    return users;
  }
}

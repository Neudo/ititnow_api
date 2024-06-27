import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly usersService: UsersService) {}

  @Post('supabase')
  @ApiOperation({ summary: 'Handle users' })
  @ApiResponse({
    status: 204,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error. An unexpected error occurred.',
  })
  async handleSupabaseEvent(@Body() data: any) {
    const { type, record, old_record } = data;
    // console.log('Received event:', type, record, old_record);

    try {
      switch (type) {
        case 'INSERT':
          return await this.usersService.createUser(record);
        case 'UPDATE':
          return await this.usersService.updateUser(record.id, record);
        case 'DELETE':
          return await this.usersService.deleteUser(old_record.id);
        case 'GET':
          return await this.usersService.getUsers();
        default:
          throw new HttpException(
            'Unsupported event type',
            HttpStatus.BAD_REQUEST,
          );
      }
    } catch (error: string | any) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {
  getEvent() {
    return [
      {
        id: 1,
        title: 'Event 1'
      }
    ]
  }
}

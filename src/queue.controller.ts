import { Controller, Get } from '@nestjs/common';
import { MyQueueService } from './queue.service';

@Controller('queue')
export class QueueController {
  constructor(private queueService: MyQueueService) {}

  @Get()
  async getHello() {
    return await this.queueService.pushMessagesToQueue();
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MyQueueService } from './queue.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private queueService: MyQueueService,
  ) {}

  @Get()
  async getHello() {}

  @Get('hello')
  async helloREq() {
    return 'hello';
  }
}

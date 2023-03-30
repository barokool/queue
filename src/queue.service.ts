import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class MyQueueService {
  constructor(@InjectQueue('myQueue') private myQueue: Queue) {}

  async pushMessagesToQueue(): Promise<string> {
    for (let i = 0; i < 100; i++) {
      this.myQueue.add('myQueue', { message: `Message ${i}` });
    }

    return 'done';
  }
}

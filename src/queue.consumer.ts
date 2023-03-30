import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('myQueue')
export class MyQueueConsumer {
  private readonly logger = new Logger(MyQueueConsumer.name);
  private count = 0;

  @Process('myQueue')
  async consumeMessages(job: Job): Promise<void> {
    this.count++;
    this.logger.debug(
      `Received message ${job.data.message}. Count: ${this.count}`,
    );

    if (this.count === 50) {
      this.logger.debug(`Consumed 50 messages. Exiting...`);
      process.exit();
    }
  }

  @OnQueueActive()
  onActive(): void {
    this.logger.debug(`Queue is active`);
  }
}

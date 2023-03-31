import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MyQueueConsumer } from './queue.consumer';
import { QueueController } from './queue.controller';
import { MyQueueService } from './queue.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'myQueue',
    }),
  ],
  controllers: [QueueController],
  providers: [MyQueueService, MyQueueConsumer],
})
export class QueueModule {}

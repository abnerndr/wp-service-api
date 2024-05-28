import { Module } from '@nestjs/common';

import { WhatsappClientModule } from './api/whatsapp-managment/client/client.module';
import { WhatsapptMessageModule } from './api/whatsapp-managment/message/message.module';

@Module({
  imports: [
    WhatsappClientModule,
    WhatsapptMessageModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

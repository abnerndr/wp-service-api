import { Controller, Get, Post } from '@nestjs/common';
import { WhatsappClientService } from './client.service';

@Controller('wp/client')
export class WhatsappClientController {
  constructor(private WPClientService: WhatsappClientService) { }

  @Post('/start')
  async runClient() {
    return await this.WPClientService.initalizeClient();
  }

  @Get('/chats')
  async getChats() {
    return await this.WPClientService.getChats();
  }
}

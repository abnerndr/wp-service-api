import { Body, Controller, Post } from "@nestjs/common";
import { WhatsapptMessageService } from "./message.service";

@Controller('wp/message')
export class WhatsapptMessageController {
    constructor(
        private messageService: WhatsapptMessageService
    ) { }


    @Post('/send')
    async sendMessage(
        @Body() { number, message }: { number: string, message: string }
    ) {
        return await this.messageService.sendMessage(number, message)
    }
}
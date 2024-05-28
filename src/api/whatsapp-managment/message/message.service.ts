import { Injectable, Logger } from "@nestjs/common";
import { Chat } from "whatsapp-web.js";
import { WhatsappClientService } from "../client/client.service";

@Injectable()
export class WhatsapptMessageService {
    public chat: Chat
    constructor(
        private clientService: WhatsappClientService
    ) { }
    private logger = new Logger(WhatsapptMessageService.name)
    private client = this.clientService.client

    async sendMessage(number: string, message: string) {
        console.log(number)
        console.log(message)
        return await this.clientService.sendMessage(number, message)
    }
}
import { Module } from "@nestjs/common";
import { WhatsappClientModule } from "../client/client.module";
import { WhatsapptMessageController } from "./message.controller";
import { WhatsapptMessageService } from "./message.service";

@Module({
    imports: [WhatsappClientModule],
    providers: [WhatsapptMessageService],
    controllers: [WhatsapptMessageController]
})
export class WhatsapptMessageModule { }
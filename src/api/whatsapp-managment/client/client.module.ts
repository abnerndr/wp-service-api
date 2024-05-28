import { Module } from "@nestjs/common";
import { WhatsappClientController } from "./client.controller";
import { WhatsappClientService } from "./client.service";

@Module({
    providers: [WhatsappClientService],
    controllers: [WhatsappClientController],
    exports: [WhatsappClientService]
})

export class WhatsappClientModule { }
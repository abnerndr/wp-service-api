import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode-terminal';
import { Client, NoAuth } from 'whatsapp-web.js';

@Injectable()
export class WhatsappClientService {
  public client: Client
  constructor() { }

  async clientCreate() {
    if (!this.client) {
      this.client = new Client({
        webVersionCache: {
          type: 'remote',
          remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html'
        },
        puppeteer: {
          args: ['--no-sandbox'],
        },
        authStrategy: new NoAuth()
      })
    }
    return this.client
  }


  async initalizeClient() {
    try {
      if (!this.client) {
        await this.clientCreate()
      }
      this.client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true })
      })

      this.client.on('ready', () => {
        console.log('client is ready!')
      })

      const messagereply = `
      1. verificar serviços
      2. realizar um orçamento
      3. suporte
      `

      this.client.on('message_create', async (msg) => {
        const text = msg.body
        if (text === '.') {
          await msg.reply(messagereply)
        }
        if (text === '2') {
          await msg.reply('ok vou te redirecionar para o sertor de vendas')
        }
      })

      this.client.initialize()
    } catch (error) {
      console.log(error)
    }
  }

  async getChats() {
    return this.client.getChats()
  }

  async sendMessage(number: string, message: string) {
    try {
      const clientId = number.substring(1) + "@c.us"
      this.client.sendMessage(clientId, message)
    } catch (error) {
      console.log(error)
    }
  }

}

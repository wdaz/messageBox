import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];
  constructor() {}

  send(text: string) {
    const message = {
      id: Date.now(),
      message: text,
      isDelected: false,
    };
    this.messages.push(message);
    console.log(this.messages);
  }

  delete(id: number) {
    this.messages[
      this.messages.findIndex((m) => m.id === id)
    ].isDelected = true;
  }
}

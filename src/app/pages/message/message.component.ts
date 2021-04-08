import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { Message } from './models/message';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnDestroy {
  messages: Message[];
  message: Message;
  
  destroy = new Subject();

  constructor(private messageService: MessageService) {
    this.messages = messageService.messages;
  }

  ngOnInit(): void {
    timer(0, 3000)
      .pipe(
        takeUntil(this.destroy),
        tap((v) => {
          const message = this.messages.filter((m) => m.isDelected === false);
          this.message = message[v % 3];
        })
      )
      .subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.unsubscribe();
  }

  send(message: string) {
    this.messageService.send(message);
  }

  delete(id: number) {
    this.messageService.delete(id);
  }
}

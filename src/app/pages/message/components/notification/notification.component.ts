import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Message } from './../../models/message';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() message: Message;
  @Output() deleteEvent = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  delete(id: number) {
    this.deleteEvent.emit(id);
  }
}

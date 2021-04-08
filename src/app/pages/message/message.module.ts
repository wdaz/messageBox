import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NotificationComponent } from './components/notification/notification.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { SendBoxComponent } from './components/send-box/send-box.component';

@NgModule({
  declarations: [MessageComponent, NotificationComponent, MessageBoxComponent, SendBoxComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class MessageModule {}

import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-box',
  templateUrl: './send-box.component.html',
  styleUrls: ['./send-box.component.scss'],
})
export class SendBoxComponent implements OnInit {
  @Output() sendEvent = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      sendInput: ['', Validators.required],
    });
  }

  get sendInputValue() {
    return this.form.get('sendInput').value.trimStart();
  }

  send() {
    this.sendEvent.emit(this.sendInputValue);
    this.form.reset();
  }

  isDisable(): boolean {
    return this.sendInputValue === '' ? true : false;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  @Input() shouldDialogOpen: boolean = false;
  @Output() dialogWasClosed: EventEmitter<void> = new EventEmitter<void>();

  submitForm(event: any, form: NgForm, dialog: HTMLDialogElement) {
    event.preventDefault();
    this.shouldDialogOpen = false;
    this.dialogWasClosed.emit()
    form.reset();
  }
}

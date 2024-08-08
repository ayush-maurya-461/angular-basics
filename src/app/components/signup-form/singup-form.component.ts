import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {

   @Input() shouldDialogOpen: boolean = false;

  submitForm(event: any, form: NgForm, dialog:HTMLDialogElement) {
    event.preventDefault();

  }
}

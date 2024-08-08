import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = 'Logo';
  @Input() lineText:string = ''

  @Output() signal : EventEmitter<void> = new EventEmitter<void>();

  openSignupForm(){
    this.signal.emit()
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sunte raho';
  dialog = false;
  isSignedUp = false;
  openDialog(){
    this.dialog = true;
  }

  dialogClosed(){
    this.dialog = false;
    this.isSignedUp = true;
  }

  userHasLoggedOut(){
    this.isSignedUp = false;
  }

}

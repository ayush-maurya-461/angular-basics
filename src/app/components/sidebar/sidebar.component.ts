import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  textColor: string = 'white';
  selectedId: number | null = null;

  navigations: any[] = [
    { title: 'Home', route: '', id: 1 },
    { title: 'Favourites', route: '', id: 2 },
    { title: 'Library', route: '', id: 3 },
    { title: 'Account', route: '', id: 4 },
    { title: 'Settings', route: '', id: 5 },
  ];

  changeTheme() {
    this.textColor = this.textColor == 'white' ? 'Black' : 'white';
  }

  setActive(id: number){
    this.selectedId = id;
  }
}

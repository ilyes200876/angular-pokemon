import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: `navbar.component.html`,
})
export class NavbarComponent {

  // Cette variable se change à la connexion
  isConnected: number = 1;
}

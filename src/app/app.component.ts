import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
// import { constructor } from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-progect';
 

constructor (
  public authService: AuthService
) {}
}
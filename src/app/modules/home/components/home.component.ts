import {Component} from '@angular/core';

@Component({
  selector: 'at-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  apiUrl = '/atm-list';
}

import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-hobbys',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './hobbys.component.html',
  styleUrl: './hobbys.component.scss'
})
export class HobbysComponent {

}

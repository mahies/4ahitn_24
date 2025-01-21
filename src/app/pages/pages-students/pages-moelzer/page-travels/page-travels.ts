import { Component } from '@angular/core';
import {Person, MOELZER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-page-about-me-moelzer',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './page-travels.html',
  styleUrl: './page-travels.scss'
})
export class PageTravels {
  me: Person = MOELZER;
}

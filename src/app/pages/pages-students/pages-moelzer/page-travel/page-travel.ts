import { Component } from '@angular/core';
import {Person, moelzer} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-page-about-me-moelzer',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './page-travel.html',
  styleUrl: './page-travel.scss'
})
export class PageTravel {
  me: Person = moelzer;
}

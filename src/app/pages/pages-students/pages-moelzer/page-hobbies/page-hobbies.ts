import { Component } from '@angular/core';
import {Person, moelzer} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-page-about-me-moelzer',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './page-hobbies.html',
  styleUrl: './page-hobbies.scss'
})
export class PageHobbies {
  me: Person = moelzer;
}

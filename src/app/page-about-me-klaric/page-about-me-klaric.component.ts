import { Component } from '@angular/core';
import {Person, klaric} from '../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-klaric',
  imports: [],
  templateUrl: './page-about-me-klaric.component.html',
  styleUrl: './page-about-me-klaric.component.scss'
})
export class PageAboutMeKLARICComponent {
  me: Person = klaric; //Variable me vom Typ Person = KONSTANTE MOUSE
}





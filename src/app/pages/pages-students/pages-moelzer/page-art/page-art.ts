import { Component } from '@angular/core';
import {Person, MOELZER} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-page-about-me-moelzer',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './page-art.html',
  styleUrl: './page-art.scss'
})
export class PageArt {
  me: Person = MOELZER;
}

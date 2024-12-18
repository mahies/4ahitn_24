import { Component } from '@angular/core';
import {Person, millich} from '../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-millich',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-about-me-millich.component.html',
  styleUrl: './page-about-me-millich.component.scss'
})
export class PageAboutMeMILLICHComponent {
  me: Person = millich;
}

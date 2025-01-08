import { Component } from '@angular/core';
import {Person, yohanna} from '../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-page-about-me-yohanna',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe
  ],
  templateUrl: './page-about-me-yohanna.component.html',
  standalone: true,
  styleUrl: './page-about-me-yohanna.component.scss'
})
export class PageAboutMeYOHANNAComponent {
  me: Person = yohanna;
}

import { Component } from '@angular/core';
import {Person, moelzer} from '../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-page-about-me-moelzer',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe
  ],
  templateUrl: './page-about-me-moelzer.component.html',
  styleUrl: './page-about-me-moelzer.component.scss'
})
export class PageAboutmoelzerComponent {
  me: Person = moelzer;
}

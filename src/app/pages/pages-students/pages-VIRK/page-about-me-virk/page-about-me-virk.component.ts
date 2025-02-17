import { Component } from '@angular/core';
import {Person, virk} from '../../../../model/person';

import {DatePipe} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-page-about-me-virk',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe
  ],
  templateUrl: './page-about-me-virk.component.html',
  standalone: true,
  styleUrl: './page-about-me-virk.component.scss'
})
export class PageAboutMeVIRKComponent {
  me: Person = virk;
}

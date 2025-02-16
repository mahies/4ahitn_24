import { Component } from '@angular/core';
import {KRAPF, MILLICH, Person} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-page-about-me-krapf',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe
  ],
  templateUrl: './page-about-me-krapf.component.html',
  standalone: true,
  styleUrl: './page-about-me-krapf.component.scss'
})
export class PageAboutMeKRAPFComponent {
  me: Person = KRAPF;
}

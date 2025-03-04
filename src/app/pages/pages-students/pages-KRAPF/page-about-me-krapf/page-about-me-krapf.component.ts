import { Component } from '@angular/core';
import {KRAPF, Person} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';
import {HeaderKrapfComponent} from '../header-krapf/header-krapf.component';

@Component({
  selector: 'app-page-about-me-krapf',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe,
    HeaderKrapfComponent
  ],
  templateUrl: './page-about-me-krapf.component.html',
  standalone: true,
  styleUrl: './page-about-me-krapf.component.scss'
})
export class PageAboutMeKRAPFComponent {
  me: Person = KRAPF;
}

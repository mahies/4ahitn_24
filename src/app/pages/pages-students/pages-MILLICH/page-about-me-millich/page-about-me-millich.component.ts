import { Component } from '@angular/core';
import {Person, MILLICH} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-page-about-me-millich',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe
  ],
  templateUrl: './page-about-me-millich.component.html',
  styleUrl: './page-about-me-millich.component.scss'
})
export class PageAboutMeMILLICHComponent {
  me: Person = MILLICH;
}

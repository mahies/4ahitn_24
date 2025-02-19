import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Person, singh} from '../../../../model/person';

@Component({
  selector: 'app-page-about-me-singh',
  imports: [
    DatePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-about-me-singh.component.html',
  styleUrl: './page-about-me-singh.component.scss'
})
export class PageAboutMeSinghComponent {
  me: Person = singh;
}

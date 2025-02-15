import { Component } from '@angular/core';
import { Person, SPELITZ} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-page-about-me-spelitz',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe
  ],
  templateUrl: './page-about-me-spelitz.component.html',
  styleUrl: './page-about-me-spelitz.component.scss',
  standalone: true
})
export class PageAboutMeSpelitzComponent {

  protected readonly me = SPELITZ;
}

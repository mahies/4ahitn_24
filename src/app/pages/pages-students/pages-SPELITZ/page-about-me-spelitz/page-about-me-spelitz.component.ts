import { Component } from '@angular/core';
import {MILLICH, Person, SPELITZ} from '../../../../model/person';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-page-about-me-spelitz',
  imports: [
    DatePipe
  ],
  templateUrl: './page-about-me-spelitz.component.html',
  styleUrl: './page-about-me-spelitz.component.scss'
})
export class PageAboutMeSpelitzComponent {

  protected readonly me = SPELITZ;
}

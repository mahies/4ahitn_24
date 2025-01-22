import { Component } from '@angular/core';
import {Person, ibrahim} from '../../../../model/person';
import {DatePipe} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-ibrahim',
  imports: [
    DatePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-about-me-ibrahim.component.html',
  styleUrl: './page-about-me-ibrahim.component.scss'
})
export class PageAboutMeIBRAHIMComponent {
  protected readonly me = ibrahim;
}

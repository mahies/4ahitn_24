
import { Component } from '@angular/core';
// @ts-ignore
import {Person, nazari} from "../../../model/person";
import {DatePipe} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-nazari',
  imports: [
    DatePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-about-me-nazari.component.html',
  styleUrl: './page-about-me-nazari.component.scss'
})
export class PageAboutMeNazariComponent {
  protected readonly me = nazari;
}

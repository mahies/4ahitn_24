import { Component } from '@angular/core';
import {Person, MINNIE} from "../../../../model/person";
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
  styleUrl: './page-about-me-nazari.component.scss',
  standalone: true
})
export class PageAboutMeNazariComponent {
  protected readonly me = MINNIE;
}

import { Component } from '@angular/core';
import {Person, geihseder} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-page-about-me-geihseder',
  imports: [RouterLink, RouterLinkActive, DatePipe],
  templateUrl: './page-about-me-geihseder.component.html',
  styleUrl: './page-about-me-geihseder.component.scss'
})
export class PageAboutMeGEIHSEDERComponent {
  me: Person = geihseder;
}

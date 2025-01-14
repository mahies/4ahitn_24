import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Person, senjic} from '../../../model/person';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-page-about-me-senjic',
  imports: [
    RouterLink,
    RouterLinkActive,
    DatePipe
  ],
  templateUrl: './page-about-me-senjic.component.html',
  styleUrl: './page-about-me-senjic.component.scss'
})
export class PageAboutMeSenjicComponent {
  me: Person = senjic;

}



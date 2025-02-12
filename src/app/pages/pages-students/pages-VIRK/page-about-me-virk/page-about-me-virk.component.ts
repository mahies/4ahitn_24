import { Component } from '@angular/core';
import {Person, virk} from '../../../../model/person';

import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-page-about-me-virk',
  imports: [DatePipe],
  templateUrl: './page-about-me-virk.component.html',
  standalone: true,
  styleUrl: './page-about-me-virk.component.scss'
})
export class PageAboutMeVIRKComponent {
  me: Person = virk;
}

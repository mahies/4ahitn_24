import { Component } from '@angular/core';
import {BECKER, Person, SCHOEFFMANN} from '../../../../model/person';

@Component({
  selector: 'app-page-about-me-becker',
  imports: [],
  templateUrl: './page-about-becker.component.html',
  styleUrl: './page-about-becker.component.scss'
})
export class PageAboutBeckerComponent {
  me: Person = BECKER;
}

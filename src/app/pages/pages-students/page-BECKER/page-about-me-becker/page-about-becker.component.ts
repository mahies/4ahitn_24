import { Component } from '@angular/core';
import {BECKER, Person} from '../../../../model/person';

@Component({
  selector: 'app-page-about-me-becker',
  imports: [],
  templateUrl: './page-about-becker.component.html',
  styleUrl: './page-about-becker.component.scss'
})
export class PageAboutBeckerComponent {
  me: Person = BECKER;
  firstname: string = "Karina";
  surname: string = "BECKER";
  birthday: string = "2006.09.07";
}

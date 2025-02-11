import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NAZARI, Person} from '../../../../model/person';

@Component({
  selector: 'app-page-about-me-becker',
  imports: [CommonModule],
  templateUrl: './page-about-becker.component.html',
  styleUrl: './page-about-becker.component.scss'
})
export class PageAboutMeineReisenComponent {
  me: Person = NAZARI;

}

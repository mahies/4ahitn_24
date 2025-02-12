import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NAZARI, Person} from '../../../../model/person';

@Component({
  selector: 'app-page-about-meine-reisen',
  imports: [CommonModule],
  templateUrl: './page-about-meine-reisen.component.html',
  styleUrl: './page-about-meine-reisen.component.scss'
})
export class PageAboutMeineReisenComponent {
  me: Person = NAZARI;

}

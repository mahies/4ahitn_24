import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NAZARI, Person} from '../../../../model/person';

@Component({
  selector: 'app-page-meine-konzerte-nazari',
  imports: [CommonModule],
  templateUrl: './page-meine-konzerte-nazari.component.html',
  styleUrl: './page-meine-konzerte-nazari.component.scss'
})
export class PageMeineKonzerteNazariComponent {
  me: Person = NAZARI;

}

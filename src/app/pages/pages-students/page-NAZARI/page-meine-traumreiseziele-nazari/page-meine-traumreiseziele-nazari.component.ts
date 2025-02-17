import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NAZARI, Person} from '../../../../model/person';

@Component({
  selector: 'app-page-meine-traumreiseziele-nazari',
  imports: [CommonModule],
  templateUrl: './page-meine-traumreiseziele-nazari.component.html',
  styleUrl: './page-meine-traumreiseziele-nazari.component.scss'
})
export class PageMeineTraumreisezieleNazariComponent {
  me: Person = NAZARI;

}

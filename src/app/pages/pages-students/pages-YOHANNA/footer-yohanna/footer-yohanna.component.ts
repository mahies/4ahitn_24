import { Component } from '@angular/core';
import {Person, yohanna} from '../../../../model/person';

@Component({
  selector: 'app-footer-yohanna',
  imports: [],
  templateUrl: './footer-yohanna.component.html',
  standalone: true,
  styleUrl: './footer-yohanna.component.scss'
})
export class FooterYohannaComponent {
  me: Person = yohanna;
}

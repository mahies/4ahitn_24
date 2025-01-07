import { Component } from '@angular/core';
import {millich, Person, yohanna} from '../model/person';
@Component({
  selector: 'app-page-about-me-yohanna',
  imports: [],
  templateUrl: './page-about-me-yohanna.component.html',
  standalone: true,
  styleUrl: './page-about-me-yohanna.component.scss'
})
export class PageAboutMeYOHANNAComponent {
  me: Person = yohanna;
}

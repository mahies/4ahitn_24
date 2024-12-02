import { Component } from '@angular/core';
import {Person, MINNIE} from '../model/person';

@Component({
  selector: 'app-page-demo',
  imports: [],
  templateUrl: './page-demo.component.html',
  styleUrl: './page-demo.component.scss',
  standalone: true
})
export class PageDemoComponent {
  me: Person = MINNIE; //Variable me vom Typ Person = KONSTANTE MOUSE
}

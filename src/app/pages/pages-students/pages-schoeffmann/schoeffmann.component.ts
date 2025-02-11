import { Component } from '@angular/core';
import { Person, SCHOEFFMANN } from '../../../model/person';
import {NavbarSchoeffmannComponent} from './navbar-schoeffmann/navbar-schoeffmann.component';

@Component({
  selector: 'app-pages-schoeffmann',
  imports: [NavbarSchoeffmannComponent],
  templateUrl: './schoeffmann.component.html',
  styleUrl: './schoeffmann.component.scss'
})
export class SchoeffmannComponent {
  me: Person = SCHOEFFMANN; //Variable me vom Typ Person = KONSTANTE MOUSE
}

import { Component } from '@angular/core';
import { Person, schoeffmann } from '../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-schoeffmann',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './schoeffmann.component.html',
  styleUrl: './schoeffmann.component.scss'
})
export class SchoeffmannComponent {
  me: Person = schoeffmann; //Variable me vom Typ Person = KONSTANTE MOUSE
}

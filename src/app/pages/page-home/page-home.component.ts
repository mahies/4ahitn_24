import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MINNIE, Person, STUDENTS} from '../../model/person';
import {NgFor} from '@angular/common';
import { OrderByPipe } from '../../pipes/orderBy.pipe';

@Component({
  selector: 'app-page-home',
  imports: [RouterLink,RouterLinkActive, NgFor, OrderByPipe],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss',
  standalone: true
})
export class PageHomeComponent {
    title = '4ahitn';
    demo: Person = MINNIE;
    students: Person[] = STUDENTS; //Variable students vom Typ array of Person = KONSTANTE

}

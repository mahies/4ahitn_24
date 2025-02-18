import { Component } from '@angular/core';
import {Person, NAZARI} from "../../../../model/person";
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-page-about-me-nazari',
  imports: [CommonModule],
  templateUrl: './page-about-me-nazari.component.html',
  styleUrl: './page-about-me-nazari.component.scss'
})
export class PageAboutMeNazariComponent {
  me: Person = NAZARI;
}

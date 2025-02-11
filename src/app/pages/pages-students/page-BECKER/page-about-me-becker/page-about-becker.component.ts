import { Component } from '@angular/core';
import {BECKER, Person} from '../../../../model/person';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-becker',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './page-about-becker.component.html',
  styleUrl: './page-about-becker.component.scss'
})
export class PageAboutBeckerComponent {
  me: Person = BECKER;

}

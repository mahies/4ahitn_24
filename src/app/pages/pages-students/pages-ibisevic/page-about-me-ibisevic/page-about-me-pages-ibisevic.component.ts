import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ WICHTIG!
import {Person, IBISEVIC} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-pages-ibisevic',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './page-about-me-pages-ibisevic.component.html',
  styleUrls: ['./page-about-me-pages-ibisevic.component.scss']
})
export class PageAboutMeIbisevicComponent{
  me: Person = IBISEVIC;


}

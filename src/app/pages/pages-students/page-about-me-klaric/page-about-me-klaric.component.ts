import { Component } from '@angular/core';
import { Person, KLARIC } from '../../../model/person';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page-about-me-klaric',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-about-me-klaric.component.html',
  styleUrls: ['./page-about-me-klaric.component.scss']
})
export class PageAboutMeKLARICComponent {
  me: Person = KLARIC;
}

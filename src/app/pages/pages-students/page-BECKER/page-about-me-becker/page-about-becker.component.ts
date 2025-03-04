import {AfterViewInit, Component} from '@angular/core';
import {BECKER, Person} from '../../../../model/person';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-becker',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './page-about-becker.component.html',
  styleUrl: './page-about-becker.component.scss'
})
export class PageAboutBeckerComponent implements AfterViewInit{
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }, 500); // Verzögerung für sicheres Laden
  }
  me: Person = BECKER;

}

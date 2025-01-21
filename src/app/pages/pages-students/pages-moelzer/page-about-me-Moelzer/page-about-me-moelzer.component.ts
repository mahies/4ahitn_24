import { Component } from '@angular/core';
import {Person, moelzer} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-page-about-me-moelzer',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './page-about-me-moelzer.component.html',
  styleUrl: './page-about-me-moelzer.component.scss'
})
export class PageAboutMeMoelzerComponent {
  me: Person = moelzer;
}

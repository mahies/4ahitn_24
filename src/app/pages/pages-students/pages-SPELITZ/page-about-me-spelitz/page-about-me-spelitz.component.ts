import { Component } from '@angular/core';
import { Person, SPELITZ} from '../../../../model/person';

@Component({
  selector: 'app-page-about-me-spelitz',
  imports: [],
  templateUrl: './page-about-me-spelitz.component.html',
  styleUrl: './page-about-me-spelitz.component.scss',
  standalone: true
})
export class PageAboutMeSpelitzComponent {

  protected readonly me = SPELITZ;
}

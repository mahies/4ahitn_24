import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-matuschka',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './page-about-me-matuschka.component.html',
  styleUrl: './page-about-me-matuschka.component.scss'
})
export class PageAboutMeMATUSCHKAComponent {
  name : string = "Matuschka";
  Mail: string = "210062@studierende.htl-donaustadt.at";
  Github: string = "Simon3294";
}

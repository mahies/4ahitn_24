import { Component } from '@angular/core';

@Component({
  selector: 'app-page-about-me-yohanna',
  imports: [],
  templateUrl: './page-about-me-yohanna.component.html',
  standalone: true,
  styleUrl: './page-about-me-yohanna.component.scss'
})
export class PageAboutMeYOHANNAComponent {
  vorname: string = "Adryano"
  nachname: string = "Yohanna"
  geburtsdatum: string = "25.10.2006"
  abteilung: string = "Abteoilung"
  github_username: string = "qaxry"
  wohnort: string = "1210 Wien"
  motto: string = "Motto"
  email: string = "210424@studierende.htl-donaustadt.at"

}

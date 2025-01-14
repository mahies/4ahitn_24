import { Component } from '@angular/core';

@Component({
  selector: 'app-page-about-me-stoilov',
  imports: [],
  templateUrl: './page-about-me-stoilov.component.html',
  styleUrl: './page-about-me-stoilov.component.scss'
})
export class PageAboutMeStoilovComponent {
  firstName : string = "Daniel";
  lastName : string = "STOILOV"
  email: string = "210417@studierende.htl-donaustadt.at";
  github: string = "@Danielzis";
  birthDate : string = "05.12.2005";
  profileImage : string = "assets-STOILOV/Ich.jpg";
}

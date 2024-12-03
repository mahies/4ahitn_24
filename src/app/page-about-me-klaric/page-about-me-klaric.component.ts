import { Component } from '@angular/core';
export interface Person {
  surname: string;
  firstname: string;
  urlImage: string;
  birthday: Date;
  department: string;
  email: string;
  github_nickname: string;
  zip_code: number; // äquivalent zu Integer in Java
  city: string;
  message: string;
}

export const MINNIE: Person = {
  surname: "KLARIC",
  firstname: "Matteo",
  urlImage: "assets/demo/Minnie_Mouse.webp",
  birthday: new Date("2005-07-31"),
  department: "ITEL Netzwerktechnik",
  email: "210273@studierende.htl-donaustadt.at",
  github_nickname: "MatteoHajduk",
  zip_code: 1010,
  city: "Wien",
  message: "\"Reden ist silber Schweigen ist Gold\" \n(KLARIC)"
};
@Component({
  selector: 'app-page-about-me-klaric',
  imports: [],
  templateUrl: './page-about-me-klaric.component.html',
  styleUrl: './page-about-me-klaric.component.scss'
})
export class PageAboutMeKLARICComponent {
}





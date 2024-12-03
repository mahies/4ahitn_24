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


@Component({
  selector: 'app-page-about-me-klaric',
  imports: [],
  templateUrl: './page-about-me-klaric.component.html',
  styleUrl: './page-about-me-klaric.component.scss'
})
export class PageAboutMeKLARICComponent {
}





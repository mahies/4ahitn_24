import { Component } from '@angular/core';

@Component({
  selector: 'app-page-about-me-krapf',
  imports: [],
  templateUrl: './page-about-me-krapf.component.html',
  standalone: true,
  styleUrl: './page-about-me-krapf.component.scss'
})
export class PageAboutMeKRAPFComponent {
  firstname: string = "Julian"
  lastname: string = "Krapf"
  birhtdate: string = "06.12.2006"
  school: string = "HTL-Donaustadt"
  department: string = "IT"
  githubUsername: string = "TRJulian"
  PLZCity: string = "1220 Wien"
  AboutMe: string = "Über Mich"
}

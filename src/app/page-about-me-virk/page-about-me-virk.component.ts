import { Component } from '@angular/core';

@Component({
  selector: 'app-page-about-me-virk',
  imports: [],
  templateUrl: './page-about-me-virk.component.html',
  styleUrl: './page-about-me-virk.component.scss'
})
export class PageAboutMeVIRKComponent {
  Name: string = "VIRK Gurnoor";
  imagePath: string = 'assets-VIRK/M9gK6W1D85YOw.png';
  GB: string = "15.11.2006";
  Wohnort: string= "Wien | Donaustadt";
  Mail: string = "210044@studierende.htl-donaustadt.at";
  Github: string = "gurnoor44";
  ABT: string = "ITEL | Netzwerktechnik";
  Zitat: string = "[Zitat kommt noch]";
}

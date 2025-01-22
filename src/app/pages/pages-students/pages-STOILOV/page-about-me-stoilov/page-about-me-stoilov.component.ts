import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-stoilov',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
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
  zitat : string = "\"Denn Gott hat die Menschen so sehr geliebt, dass er seinen einzigen Sohn für sie hergab. \n Jeder, der an ihn glaubt, wird nicht zugrunde gehen, sondern das ewige Leben haben.\" - Johannes 3:16";
  beschreibung : string = "Ich bin ein vielseitiger Mensch, gehe gerne mit Freunde raus, betreibe Fitness, spiele Volleyball und übe Klavier. Neben meinem Hobby liebe ich es, neue Orte zu entdecken, und strebe eine Karriere in der IT-Branche an.";
}

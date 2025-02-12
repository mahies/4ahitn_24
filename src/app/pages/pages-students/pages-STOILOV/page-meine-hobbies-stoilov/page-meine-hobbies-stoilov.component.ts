import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-meine-hobbies-stoilov',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-meine-hobbies-stoilov.component.html',
  styleUrl: './page-meine-hobbies-stoilov.component.scss'
})
export class PageMeineHobbiesStoilovComponent {
  volleyballBild : string = "assets-STOILOV/volleyball.jpg";
  trainingBild : string = "assets-STOILOV/training.jpg";
  klavierBild : string = "assets-STOILOV/klavier.jpg";
  programmierenBild : string = "assets-STOILOV/programmieren.jpg";
}

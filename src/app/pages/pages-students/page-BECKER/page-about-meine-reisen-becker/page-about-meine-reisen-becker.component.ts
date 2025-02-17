import { Component } from '@angular/core';
import {BECKER, Person} from '../../../../model/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-about-me-becker',
  imports: [CommonModule],
  templateUrl: './page-about-meine-reisen-becker.component.html',
  styleUrl: './page-about-meine-reisen-becker.component.scss'
})
export class PageAboutMeineReisenBeckerComponent {
  visitedDestinations = [
    {
      name: 'St. Johann, Salzburg',
      description: ''
    },
    {
      name: 'Polen',
      description: ''
    },
    {
      name: 'Nassfeld, Kärnten',
      description: ''
    }
    // Füge hier weitere Reiseziele hinzu
  ];
}

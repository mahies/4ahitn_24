import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-becker',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './page-about-meine-reisen-becker.component.html',
  styleUrl: './page-about-meine-reisen-becker.component.scss'
})
export class PageAboutMeineReisenBeckerComponent {
  visitedDestinations = [
    {
      id: 'nassfeld',
      name: 'Nassfeld, Kärnten',
      images: ['assets-BECKER/skipiste.jpeg', 'assets-BECKER/ski.jpeg', 'assets-BECKER/aussichtbalkonskiwoche.jpeg'],
      description: 'Skikurs Dezember 2022: Mein erstes Skifahren war wirklich etwas Besonderes. Wir hatten super schöne Tage und unglaublich viel Spaß. '
    },
    {
      id: 'polen',
      name: 'Polen',
      images: ['assets-BECKER/ciesznstraße.jpeg', 'assets-BECKER/gdansk.jpeg', 'assets-BECKER/meergdansk.jpeg',
        'assets-BECKER/panzer.jpeg', 'assets-BECKER/strandleba.jpeg', 'assets-BECKER/westerplatte.jpeg'],
      description: 'Jeden Sommer in Polen: Wir erkunden verschiedene Städte, oft an der schönen Ostsee. Egal ob in der lebendigen Großstadt Gdansk (Danzig) oder in den kleineren Städten wie Lebork und Leba, es ist immer eine Freude, all die Sehenswürdigkeiten zu entdecken und die Vielfalt der Orte zu erleben.'
    },
    {
      id: 'burgenland',
      name: 'Burgenland',
      images: ['assets-BECKER/hochseilgarten.jpeg', 'assets-BECKER/dirtbike.jpeg',],
      description: 'Burgenland, Juli 2024: entspanntes Wochenende im Burgenland. Der Hochseilklettergarten war ein spannendes Highlight, bei dem wir hoch hinausgingen und viel Spaß hatten. Ein perfekter Mix aus Entspannung und Abenteuer!'
    },
    {
      id: 'salzburg',
      name: 'Salzburg',
      images: [
        'assets-BECKER/flying fox.jpeg', 'assets-BECKER/klamm.jpeg', 'assets-BECKER/klammschlucht.jpeg',
        'assets-BECKER/klammtreppe.jpeg', 'assets-BECKER/regenbogen.jpeg', 'assets-BECKER/wasserfall.jpeg'],
      description: 'Salzburg, Juli 2024: Dieser Urlaub war ein unglaubliches Abenteuer! Besonders der Flying Fox war ein absolutes Highlight. Ein toller Urlaub mit unvergesslichen Erinnerungen und vielen tollen Aktivitäten, wie der wunderschöne Liechtensteinklamm und die Krimmler Wasserfälle.'
    },

  ];
}

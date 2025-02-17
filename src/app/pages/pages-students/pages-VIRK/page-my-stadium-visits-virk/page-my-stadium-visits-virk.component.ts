import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-page-my-stadium-visits-virk',
  imports: [
    RouterLink,
    RouterLinkActive,

  ],
  templateUrl: './page-my-stadium-visits-virk.component.html',
  styleUrl: './page-my-stadium-visits-virk.component.scss'
})
export class PageMyStadiumVisitsVirkComponent {

  giuseppeMeazza: string = 'assets-VIRK/giuseppe-meazza-stadion.png';
  ernstHappelStadion: string = 'assets-VIRK/ernst-happel-stadion.png';
  emiratesStadion: string = 'assets-VIRK/emirates-stadion.png';
}

import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {virk} from "../../../../model/person";


@Component({
  selector: 'app-page-my-travels-virk',
  imports: [
    RouterLink,
    RouterLinkActive,

  ],
  templateUrl: './page-my-travels-virk.component.html',
  styleUrl: './page-my-travels-virk.component.scss'
})
export class PageMyTravelsVirkComponent {
  paris: string = 'assets-VIRK/paris.png';
  rodos: string = 'assets-VIRK/rodos.png';
  barcelona: string = 'assets-VIRK/barcelona.png';
  venedig: string = 'assets-VIRK/venedig.png';
    protected readonly me = virk;
}

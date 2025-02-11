import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-my-jerseys-senjic',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-my-jerseys-senjic.component.html',
  styleUrl: './page-my-jerseys-senjic.component.scss'
})
export class PageMyJerseysSenjicComponent {
  bayernA202425: string = 'assets-SENJIC/FCB24-25.png';
  bayernH202324: string = 'assets-SENJIC/FCB23-24.png';
  bayernA202122: string = 'assets-SENJIC/FCB21-22.png';
  mancity: string = 'assets-SENJIC/mancity23-24.png';
  liverpool: string = 'assets-SENJIC/liverpool22-23.png';
  juve: string = 'assets-SENJIC/juve22-23.png';
  milan: string = 'assets-SENJIC/AC2006.png';
  barca: string = 'assets-SENJIC/barca14-15.png';
  kroatienH: string = 'assets-SENJIC/croH22.png';
  kroatienA: string = 'assets-SENJIC/croA22.png';


}

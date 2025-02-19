import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-page-my-future-senjic',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './page-my-future-senjic.component.html',
  styleUrl: './page-my-future-senjic.component.scss'
})
export class PageMyFutureSenjicComponent {

  Mengergasse: string = "2013 – 2017 ";
  F26: string = "2017 – 2021";
  HTL: string = "2021 - laufend";

  MengergasseIMG: string = 'assets-SENJIC/Mengergasse.png';
  F26IMG: string = 'assets-SENJIC/F26.png';
  HTLIMG: string = 'assets-SENJIC/HTL.png';
  Insta:string = 'assets/Insta.png';
}

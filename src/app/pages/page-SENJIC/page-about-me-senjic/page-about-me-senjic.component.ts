import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-senjic',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-about-me-senjic.component.html',
  styleUrl: './page-about-me-senjic.component.scss'
})
export class PageAboutMeSenjicComponent {
  name:String = "SENJIĆ Oliver";
  Portrait: string = 'assets-SENJIC/fghjkdibfeb.png';
  GB: string = "29.10.2006";
  Wohnort: string= "Wien | Floridsdorf";
  Mail: string = "210278@studierende.htl-donaustadt.at";
  Github: string = "oliver5977";
  ABT: string = "ITEL | Netzwerktechnik";
  Zitat: string = "Wisst ihr, was die billigste warme Mahlzeit in Österreich ist? Sie ist nicht gesund, aber sie ist billig." +
    " Ein Hamburger bei McDonalds. 1,40 Euro. Wenn ich jetzt noch Pommes dazu kaufe - 3,50 Euro." +
    " Und jetzt behauptet wirklich einer ernsthaft, wir leben in einem Land, wo Eltern sich dieses Essen für ihr Kind nicht leisten können?";



}



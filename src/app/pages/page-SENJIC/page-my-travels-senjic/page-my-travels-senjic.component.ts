import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-my-travels-senjic',

  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-my-travels-senjic.component.html',
  styleUrl: './page-my-travels-senjic.component.scss'
})
export class PageMyTravelsSenjicComponent {
Kroatien:String="Kroatien – ein Paradies mit kristallklarem Wasser und beeindruckender Küstenlandschaft";
Italien:String="Italien – ein Land voller Geschichte, Kunst und atemberaubender Landschaften";
Oesterreich:String="Die majestätischen Alpen Österreichs in ihrer vollen Pracht";
Griechenland:String="Griechenland – ein Land voller antiker Geschichte und traumhafter Inseln";
Serbien:String="Serbien – ein Land mit reicher Kultur, faszinierender Geschichte und wunderschönen Landschaften";
Bosnien:String="Bosnien – ein Land mit malerischen Bergen und beeindruckender Natur";
Mazedonien:String="Mazedonien – ein Land voller Geschichte und unberührter Landschaften";
Turkei:String="Kein schöner Text für die Türkei";

Kroatienimg: string = 'assets-SENJIC/Kroatien.png';
Italienimg: string = 'assets-SENJIC/Italien.png';
Oesterreichimg: string = 'assets-SENJIC/Oesterreich.png';
Griechenlandimg: string = 'assets-SENJIC/Griechenland.png';
Serbienimg: string = 'assets-SENJIC/Serbien.png';
Bosnienimg: string = 'assets-SENJIC/Bosnien.png';
Mazedonienimg: string = 'assets-SENJIC/Mazedonien.png';
Turkeiimg: string = 'assets-SENJIC/Turkei.png';

}

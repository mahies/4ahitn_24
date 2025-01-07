import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-meine-reisen',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './meine-reisen.component.html',
  styleUrl: './meine-reisen.component.scss'
})
export class MeineReisenComponent {
uptipter:String="Uptipter ist ein Paradies mit kristallklarem Wasser und beeindruckender Küstenlandschaft";
oesterreich:String="Österreich ist ein schnönes Land";

uptipterimg: string = "assets-SCHOEFFMANN/uptipter.webp";
oesterreichimg: string = "assets-SCHOEFFMANN/oesterreich.png";

}

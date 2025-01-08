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
norwegen:String="Norwegen ist ein winterliches Land";
usa:String="Die USA hat viele coole Brücken";

uptipterimg: string = "assets-SCHOEFFMANN/uptipter.webp";
oesterreichimg: string = "assets-SCHOEFFMANN/oesterreich.png";
norwegenimg: string = "assets-SCHOEFFMANN/norwegen-winter.jpg";
usaimg: string = "assets-SCHOEFFMANN/usa-bruecke.jpg";

}

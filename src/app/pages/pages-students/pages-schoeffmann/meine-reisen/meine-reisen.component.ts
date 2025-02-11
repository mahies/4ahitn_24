import { Component } from '@angular/core';
import {NavbarSchoeffmannComponent} from '../navbar-schoeffmann/navbar-schoeffmann.component';

@Component({
  selector: 'app-meine-reisen',
  imports: [NavbarSchoeffmannComponent],
  templateUrl: './meine-reisen.component.html',
  styleUrl: './meine-reisen.component.scss'
})
export class MeineReisenComponent {
nizza:String="Nizza ist eine Stadt in Frankreich nahe der Italienischen Grenze. Ich war einen Tag in Nizza mit meiner Familie, während wir in Imperia wohnten.";
oesterreich:String="Österreich ist ein schnönes Land. (Ich lebe aktuell in Österreich)";
imperia:String="Imperia ist eine Stadt in Italien.";
innsbruck:String="Im Sommer fuhr ich von Wien zusammen mit meinem Vater per Fahrrad nach Innsbruck. Der Kaiserschmarren war lecker";
emojiCode: string = '&#128523;';


nizzaimg: string = "assets-SCHOEFFMANN/nizza.jpg";
oesterreichimg: string = "assets-SCHOEFFMANN/oesterreich.png";
imperiaimg: string = "assets-SCHOEFFMANN/imperia.webp";
innsbruckimg: string = "assets-SCHOEFFMANN/innsbruck.jpg";

}

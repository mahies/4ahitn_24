import { Component } from '@angular/core';
import {NavbarSchoeffmannComponent} from '../navbar-schoeffmann/navbar-schoeffmann.component';

@Component({
  selector: 'app-hobbys',
  imports: [
    NavbarSchoeffmannComponent
  ],
  templateUrl: './hobbys.component.html',
  styleUrl: './hobbys.component.scss'
})
export class HobbysComponent {
  feuerimg: string = "assets-SCHOEFFMANN/Bilder/Hobbys/Feuer.jpg";
  serverimg: string = "assets-SCHOEFFMANN/Bilder/Hobbys/Server.jpg";
  eine380kVLeitungimg: string = "assets-SCHOEFFMANN/Bilder/Hobbys/380kV-Leitung.jpg";
  eisabfallimg: string = "assets-SCHOEFFMANN/Bilder/Hobbys/Eisabfall.jpg";
  kraftwerkduernrohrimg: string = "assets-SCHOEFFMANN/Bilder/Hobbys/Kraftwerk-Dürnrohr.jpg";
  grashuepferimg: string = "assets-SCHOEFFMANN/Bilder/Hobbys/Grashüpfer.jpg";

}


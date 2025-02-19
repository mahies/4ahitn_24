import { Component } from '@angular/core';
import {NavbarSchoeffmannComponent} from '../navbar-schoeffmann/navbar-schoeffmann.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-projekte',
  imports: [
    NavbarSchoeffmannComponent,
    RouterLink,
    RouterLinkActive,
    FooterComponent
  ],
  templateUrl: './projekte.component.html',
  styleUrl: './projekte.component.scss'
})
export class ProjekteComponent {
  angularimg: string = "assets-SCHOEFFMANN/angular.jpg";
  tankrobot: string = "assets-SCHOEFFMANN/freenove-tank-robot.jpg";
  lifepoakkuimg: string = "assets-SCHOEFFMANN/Bilder/Hobbys/Vorsicht-Starkstrom.jpg";
  kettcarimg: string = "assets-SCHOEFFMANN/Bilder/Hobbys/Kettcar.jpg";

}

import { Component } from '@angular/core';
import {NavbarSchoeffmannComponent} from '../navbar-schoeffmann/navbar-schoeffmann.component';

@Component({
  selector: 'app-projekte',
  imports: [
    NavbarSchoeffmannComponent
  ],
  templateUrl: './projekte.component.html',
  styleUrl: './projekte.component.scss'
})
export class ProjekteComponent {
  angularimg: string = "assets-SCHOEFFMANN/angular.jpg";
  tankrobot: string = "assets-SCHOEFFMANN/freenove-tank-robot.jpg";

}

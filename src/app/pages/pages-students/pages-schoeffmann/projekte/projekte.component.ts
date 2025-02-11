import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-projekte',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './projekte.component.html',
  styleUrl: './projekte.component.scss'
})
export class ProjekteComponent {
  angularimg: string = "assets-SCHOEFFMANN/angular.jpg";
  tankrobot: string = "assets-SCHOEFFMANN/freenove-tank-robot.jpg";

}

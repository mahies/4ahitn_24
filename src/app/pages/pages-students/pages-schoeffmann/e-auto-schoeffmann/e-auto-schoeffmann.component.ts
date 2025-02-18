import { Component } from '@angular/core';
import {NavbarSchoeffmannComponent} from '../navbar-schoeffmann/navbar-schoeffmann.component';

@Component({
  selector: 'app-e-auto-schoeffmann',
  imports: [
    NavbarSchoeffmannComponent,
  ],
  templateUrl: './e-auto-schoeffmann.component.html',
  styleUrl: './e-auto-schoeffmann.component.scss'
})
export class EAutoSchoeffmannComponent {
  lifepoakkuimg: string = "assets-SCHOEFFMANN/Bilder/Hobbys/Vorsicht-Starkstrom.jpg";
  kettcarimg: string = "assets-SCHOEFFMANN/Bilder/Hobbys/Kettcar.jpg";
}

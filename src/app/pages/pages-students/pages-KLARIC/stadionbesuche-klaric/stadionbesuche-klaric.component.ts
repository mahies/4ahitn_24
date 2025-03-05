import { Component } from '@angular/core';
import {HeaderKlaricComponent} from "../header-klaric/header-klaric.component";
import {FooterKlaricComponent} from '../footer-klaric/footer-klaric.component';

@Component({
  selector: 'app-stadionbesuche-klaric',
  imports: [
    HeaderKlaricComponent,
    FooterKlaricComponent
  ],
  templateUrl: './stadionbesuche-klaric.component.html',
  styleUrl: './stadionbesuche-klaric.component.scss'
})
export class StadionbesucheKlaricComponent {

}

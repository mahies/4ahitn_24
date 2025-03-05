import { Component } from '@angular/core';
import {HeaderKlaricComponent} from "../header-klaric/header-klaric.component";
import {FooterKlaricComponent} from '../footer-klaric/footer-klaric.component';


@Component({
  selector: 'app-hobbies',
  imports: [
    HeaderKlaricComponent,
    FooterKlaricComponent
  ],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {

}

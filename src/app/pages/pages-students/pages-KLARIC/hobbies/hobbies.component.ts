import { Component } from '@angular/core';
import {HeaderKlaricComponent} from "../header-klaric/header-klaric.component";


@Component({
  selector: 'app-hobbies',
    imports: [
        HeaderKlaricComponent
    ],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {

}

import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderMILLICHComponent} from "../header-millich/header-millich.component";

@Component({
  selector: 'app-page-meine-ausbildung-millich',
    imports: [
        RouterLink,
        RouterLinkActive,
        HeaderMILLICHComponent
    ],
  templateUrl: './page-meine-ausbildung-millich.component.html',
  styleUrl: './page-meine-ausbildung-millich.component.scss'
})
export class PageMeineAusbildungMillichComponent {

}

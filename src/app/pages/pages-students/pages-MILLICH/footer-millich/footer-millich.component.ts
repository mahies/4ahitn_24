import { Component } from '@angular/core';
import {MILLICH} from "../../../../model/person";

@Component({
  selector: 'app-footer-millich',
  imports: [],
  templateUrl: './footer-millich.component.html',
  styleUrl: './footer-millich.component.scss'
})
export class FooterMILLICHComponent {
   currentYear = new Date().getFullYear();
    protected readonly me = MILLICH;
}

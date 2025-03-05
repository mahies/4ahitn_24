import { Component } from '@angular/core';
import {HeaderKlaricComponent} from "../header-klaric/header-klaric.component";
import {FooterKlaricComponent} from '../footer-klaric/footer-klaric.component';

@Component({
    selector: 'app-reiseorte',
    templateUrl: './reiseorte.component.html',
  imports: [
    HeaderKlaricComponent,
    FooterKlaricComponent
  ],
    styleUrls: ['./reiseorte.component.scss']
})
export class ReiseorteComponent {}

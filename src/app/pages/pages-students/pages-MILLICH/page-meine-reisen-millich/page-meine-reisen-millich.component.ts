import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderMILLICHComponent} from '../header-millich/header-millich.component';
import {FooterMILLICHComponent} from '../footer-millich/footer-millich.component';

@Component({
  selector: 'app-page-meine-reisen-millich',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderMILLICHComponent,
    FooterMILLICHComponent
  ],
  templateUrl: './page-meine-reisen-millich.component.html',
  styleUrl: './page-meine-reisen-millich.component.scss'
})
export class PageMeineReisenMILLICHComponent {

}

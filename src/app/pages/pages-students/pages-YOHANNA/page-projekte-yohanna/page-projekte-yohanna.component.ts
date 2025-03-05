import { Component } from '@angular/core';
import {HeaderYohannaComponent} from '../header-yohanna/header-yohanna.component';
import {FooterYohannaComponent} from '../footer-yohanna/footer-yohanna.component';

@Component({
  selector: 'app-page-projekte-yohanna',
  imports: [
    HeaderYohannaComponent,
    FooterYohannaComponent
  ],
  templateUrl: './page-projekte-yohanna.component.html',
  standalone: true,
  styleUrl: './page-projekte-yohanna.component.scss'
})
export class PageProjekteYohannaComponent {

}

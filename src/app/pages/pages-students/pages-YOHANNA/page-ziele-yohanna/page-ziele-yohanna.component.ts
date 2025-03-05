import { Component } from '@angular/core';
import {HeaderYohannaComponent} from '../header-yohanna/header-yohanna.component';
import {FooterYohannaComponent} from '../footer-yohanna/footer-yohanna.component';

@Component({
  selector: 'app-page-ziele-yohanna',
  imports: [
    HeaderYohannaComponent,
    FooterYohannaComponent
  ],
  templateUrl: './page-ziele-yohanna.component.html',
  standalone: true,
  styleUrl: './page-ziele-yohanna.component.scss'
})
export class PageZieleYohannaComponent {

}

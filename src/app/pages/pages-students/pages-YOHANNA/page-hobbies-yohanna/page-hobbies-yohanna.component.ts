import { Component } from '@angular/core';
import {HeaderYohannaComponent} from '../header-yohanna/header-yohanna.component';
import {FooterYohannaComponent} from '../footer-yohanna/footer-yohanna.component';

@Component({
  selector: 'app-page-hobbies-yohanna',
  imports: [
    HeaderYohannaComponent,
    FooterYohannaComponent
  ],
  templateUrl: './page-hobbies-yohanna.component.html',
  standalone: true,
  styleUrl: './page-hobbies-yohanna.component.scss'
})
export class PageHobbiesYohannaComponent {

}

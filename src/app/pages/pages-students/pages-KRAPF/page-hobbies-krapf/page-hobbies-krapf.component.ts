import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderKrapfComponent} from '../header-krapf/header-krapf.component';
import {FooterKrapfComponent} from '../footer-krapf/footer-krapf.component';

@Component({
  selector: 'app-page-hobbies-krapf',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderKrapfComponent,
    FooterKrapfComponent
  ],
  templateUrl: './page-hobbies-krapf.component.html',
  styleUrl: './page-hobbies-krapf.component.scss'
})
export class PageHobbiesKrapfComponent {

}

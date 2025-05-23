import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderKrapfComponent} from '../header-krapf/header-krapf.component';
import {FooterKrapfComponent} from '../footer-krapf/footer-krapf.component';

@Component({
  selector: 'app-page-reisen-krapf',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderKrapfComponent,
    FooterKrapfComponent
  ],
  templateUrl: './page-reisen-krapf.component.html',
  styleUrl: './page-reisen-krapf.component.scss'
})
export class PageReisenKrapfComponent {

}

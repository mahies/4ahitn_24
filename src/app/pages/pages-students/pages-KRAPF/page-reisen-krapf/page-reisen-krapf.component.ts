import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderKrapfComponent} from '../header-krapf/header-krapf.component';

@Component({
  selector: 'app-page-reisen-krapf',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderKrapfComponent
  ],
  templateUrl: './page-reisen-krapf.component.html',
  styleUrl: './page-reisen-krapf.component.scss'
})
export class PageReisenKrapfComponent {

}

import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HeaderKrapfComponent} from '../header-krapf/header-krapf.component';

@Component({
  selector: 'app-page-reiseziele-krapf',
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderKrapfComponent
  ],
  templateUrl: './page-reiseziele-krapf.component.html',
  styleUrl: './page-reiseziele-krapf.component.scss'
})
export class PageReisezieleKrapfComponent {

}

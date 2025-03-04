import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header-krapf',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-krapf.component.html',
  styleUrl: './header-krapf.component.scss'
})
export class HeaderKrapfComponent {

}

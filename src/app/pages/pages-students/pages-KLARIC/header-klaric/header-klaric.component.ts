import { Component } from '@angular/core';
import {KLARIC, MILLICH} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header-klaric',
  imports: [
    RouterLink,

  ],
  templateUrl: './header-klaric.component.html',
  styleUrl: './header-klaric.component.scss',
  standalone: true,

})
export class HeaderKlaricComponent {

  protected readonly me = KLARIC;
}

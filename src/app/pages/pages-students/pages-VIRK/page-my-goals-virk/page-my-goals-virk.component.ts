import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {virk} from "../../../../model/person";


@Component({
  selector: 'app-page-my-goals-virk',
  imports: [
    RouterLink,
    RouterLinkActive,

  ],
  templateUrl: './page-my-goals-virk.component.html',
  styleUrl: './page-my-goals-virk.component.scss'
})
export class PageMyGoalsVirkComponent {

    protected readonly me = virk;
}

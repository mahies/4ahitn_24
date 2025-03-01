import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SPELITZ} from '../../../../model/person';

@Component({
  selector: 'app-meine-haustiere-spelitz',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './meine-haustiere-spelitz.component.html',
  styleUrl: './meine-haustiere-spelitz.component.scss'
})
export class MeineHaustiereSpelitzComponent {

  protected readonly me = SPELITZ;
}

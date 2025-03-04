import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MILLICH} from "../../../../model/person";

@Component({
  selector: 'app-header-millich',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './header-millich.component.html',
  styleUrl: './header-millich.component.scss'
})
export class HeaderMILLICHComponent {

    protected readonly me = MILLICH;
}

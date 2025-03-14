import { Component } from '@angular/core';
import { Person, KLARIC } from '../../../model/person';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {HeaderMILLICHComponent} from "../pages-MILLICH/header-millich/header-millich.component";
import {HeaderKlaricComponent} from '../pages-KLARIC/header-klaric/header-klaric.component';
import {FooterMILLICHComponent} from '../pages-MILLICH/footer-millich/footer-millich.component';
import {FooterKlaricComponent} from '../pages-KLARIC/footer-klaric/footer-klaric.component';

@Component({
  selector: 'app-page-about-me-klaric',
  imports: [RouterLink, RouterLinkActive, HeaderMILLICHComponent, HeaderKlaricComponent, FooterMILLICHComponent, FooterKlaricComponent],
  templateUrl: './page-about-me-klaric.component.html',
  styleUrls: ['./page-about-me-klaric.component.scss']
})
export class PageAboutMeKLARICComponent {
  me: Person = KLARIC;
}

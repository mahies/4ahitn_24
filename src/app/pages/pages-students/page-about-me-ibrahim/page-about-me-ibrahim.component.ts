import { Component } from '@angular/core';
import {Person, ibrahim} from '../../../model/person';

@Component({
  selector: 'app-page-about-me-ibrahim',
  imports: [],
  templateUrl: './page-about-me-ibrahim.component.html',
  styleUrl: './page-about-me-ibrahim.component.scss'
})
export class PageAboutMeIBRAHIMComponent {
  protected readonly me = ibrahim;
}

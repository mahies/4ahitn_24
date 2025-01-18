import { Component } from '@angular/core';
import {ibrahim, millich} from '../../../model/person';

@Component({
  selector: 'app-page-about-me-ibrahim',
  imports: [],
  templateUrl: './page-about-me-ibrahim.component.html',
  styleUrl: './page-about-me-ibrahim.component.scss'
})
export class PageAboutMeIBRAHIMComponent {
  imagePath: string = 'public/assets-IBRAHIM/male-model-francisco-lachowski-on-top-of-being-handsome-asf-v0-rrxuw64ie29c1.jpg';
  protected readonly me = ibrahim;
}

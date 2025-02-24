import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-my-travels-singh',
  imports: [
    DatePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-my-travels-singh.component.html',
  styleUrls: ['./page-my-travels-singh.component.scss']
})
export class PageMyTravelsSinghComponent {}

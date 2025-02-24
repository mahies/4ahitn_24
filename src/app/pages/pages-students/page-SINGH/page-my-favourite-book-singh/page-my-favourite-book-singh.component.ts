import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-my-favourite-book-singh',
  imports: [
    DatePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-my-favourite-book-singh.component.html',
  styleUrls: ['./page-my-favourite-book-singh.component.scss']
})
export class PageMyFavouriteBookSinghComponent {}

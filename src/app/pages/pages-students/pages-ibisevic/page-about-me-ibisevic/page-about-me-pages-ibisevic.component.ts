import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ WICHTIG!
import {Person, ibisevic} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-about-me-pages-ibisevic',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './page-about-me-pages-ibisevic.component.html',
  styleUrls: ['./page-about-me-pages-ibisevic.component.scss']
})
export class PageAboutMeIbisevicComponent implements OnInit {
  me!: Person;

  ngOnInit() {
    this.me = ibisevic;
  }
}

import { Routes } from '@angular/router';
import {PageDemoComponent} from './page-demo/page-demo.component';
import {PageHomeComponent} from './page-home/page-home.component';
import {PageAboutMeKRAPFComponent} from './page-about-me-krapf/page-about-me-krapf.component';

export const routes: Routes = [
  { path: '', // default route
    component: PageHomeComponent },
  { path: 'home',
    component: PageHomeComponent },
  { path: 'page_demo',
    component: PageDemoComponent },
  {path: 'about_me_krapf',
    component: PageAboutMeKRAPFComponent },
];


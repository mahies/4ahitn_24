import { Routes } from '@angular/router';
import {PageDemoComponent} from './page-demo/page-demo.component';
import {PageHomeComponent} from './page-home/page-home.component';
import {PageAboutMeKRAPFComponent} from './page-about-me-krapf/page-about-me-krapf.component';
import {PageAboutMeMILLICHComponent} from './page-about-me-millich/page-about-me-millich.component';
import {PageAboutMeKLARICComponent} from './page-about-me-klaric/page-about-me-klaric.component';
import {PageAboutMeAljarrahComponent} from './page-about-me-aljarrah/page-about-me-aljarrah.component';
import {PageAboutMeGEIHSEDERComponent} from './page-about-me-geihseder/page-about-me-geihseder.component';
import {PageAboutMeYOHANNAComponent}  from './page-about-me-yohanna/page-about-me-yohanna.component';
import {PageAboutMeVIRKComponent} from './page-about-me-virk/page-about-me-virk.component';

export const routes: Routes = [
  { path: '', // default route
    component: PageHomeComponent },
  { path: 'home',
    component: PageHomeComponent },
  { path: 'page_demo',
    component: PageDemoComponent },
  {path: 'about_me_krapf',
    component: PageAboutMeKRAPFComponent },
  { path: 'about_meMILLICH',
    component: PageAboutMeMILLICHComponent},
  {path: 'aboutMeKLARIC',
  component: PageAboutMeKLARICComponent},
  {path: 'about_me_aljarrah',
    component: PageAboutMeAljarrahComponent },
  {path: 'aboutMeGEIHSEDER',
    component: PageAboutMeGEIHSEDERComponent},
  {path: 'aboutMeVIRK',
    component: PageAboutMeVIRKComponent},
  {path: 'aboutMeYOHANNA',
    component: PageAboutMeYOHANNAComponent}
];


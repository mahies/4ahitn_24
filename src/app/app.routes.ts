import {Routes} from '@angular/router';
import {PageDemoComponent} from './pages/pages-demo/page-demo/page-demo.component';
import {PageHomeComponent} from './pages/page-home/page-home.component';
import {PageAboutMeKRAPFComponent} from './pages/pages-students/page-about-me-krapf/page-about-me-krapf.component';
import {PageAboutMeMILLICHComponent} from './pages/pages-students/pages-MILLICH/page-about-me-millich/page-about-me-millich.component';
import {PageAboutMeKLARICComponent} from './pages/pages-students/page-about-me-klaric/page-about-me-klaric.component';
import {ReiseorteComponent} from './pages/pages-students/pages-KLARIC/reiseorte/reiseorte.component';
import {PageAboutMeAljarrahComponent} from './pages/pages-students/page-about-me-aljarrah/page-about-me-aljarrah.component';
import {PageAboutMeGEIHSEDERComponent} from './pages/pages-students/pages-GEIHSEDER/page-about-me-geihseder/page-about-me-geihseder.component';
import {PageAboutMeYOHANNAComponent} from './pages/pages-students/page-about-me-yohanna/page-about-me-yohanna.component';
import {PageAboutMeMATUSCHKAComponent} from './pages/pages-students/page-MATUSCHKA/page-about-me-matuschka/page-about-me-matuschka.component';
import {PageAboutMeSenjicComponent} from './pages/pages-students/page-SENJIC/page-about-me-senjic/page-about-me-senjic.component';
import {PageAboutMeIBRAHIMComponent} from './pages/pages-students/page-about-me-ibrahim/page-about-me-ibrahim.component';
import {PageAboutMeSinghComponent} from './pages/pages-students/page-about-me-singh/page-about-me-singh.component';
import {PageAboutMeNazariComponent} from './pages/pages-students/page-about-me-nazari/page-about-me-nazari.component';
import { SchoeffmannComponent } from './pages/pages-students/schoeffmann/schoeffmann.component';
import { MeineReisenComponent } from './pages/pages-students/schoeffmann/meine-reisen/meine-reisen.component';
import {PageAboutMeVIRKComponent} from './pages/pages-students/page-about-me-virk/page-about-me-virk.component';
import {PageAboutBeckerComponent} from './pages/pages-students/page-about-becker/page-about-becker.component';
import {PageMyTravelsSenjicComponent} from './pages/pages-students/page-SENJIC/page-my-travels-senjic/page-my-travels-senjic.component';
import {PageStadienbesucheMatuschkaComponent} from './pages/pages-students/page-MATUSCHKA/page-stadienbesuche-matuschka/page-stadienbesuche-matuschka.component';
import {PageMyFutureSenjicComponent} from './pages/pages-students/page-SENJIC/page-my-future-senjic/page-my-future-senjic.component';
import { PageAboutMeStoilovComponent } from './pages/pages-students/page-about-me-stoilov/page-about-me-stoilov.component';
import {Subpage1Component} from './pages/pages-demo/subpage1/subpage1.component';
import {Subpage2Component} from './pages/pages-demo/subpage2/subpage2.component';

export const routes: Routes = [
  {
    path: '', // default route
    component: PageHomeComponent,
  },
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: 'page_demo',
    component: PageDemoComponent,
  },
  {
    path: 'page_demo/subpage1',
    component: Subpage1Component,
  },
  {
    path: 'page_demo/subpage2',
    component: Subpage2Component,
  },
  {
    path: 'about_me_krapf',
    component: PageAboutMeKRAPFComponent
  },
  {
    path: 'about_meMILLICH',
    component: PageAboutMeMILLICHComponent
  },
  {
    path: 'aboutMeBECKER',
    component: PageAboutBeckerComponent
  },
  {
    path: 'aboutMeKLARIC',
    component: PageAboutMeKLARICComponent
  },
  {
    path: 'about_me_aljarrah',
    component: PageAboutMeAljarrahComponent
  },
  {
    path: 'aboutMeGEIHSEDER',
    component: PageAboutMeGEIHSEDERComponent
  },
  {
    path: 'aboutMeYOHANNA',
    component: PageAboutMeYOHANNAComponent
  },
  {
    path: 'aboutMeSENJIC',
    component: PageAboutMeSenjicComponent
  },
  {
    path: 'myTravelsSENJIC',
    component: PageMyTravelsSenjicComponent
  },
  {
    path: 'MyFutureSENJIC',
    component: PageMyFutureSenjicComponent
  },
  {
    path: 'aboutMeMATUSCHKA',
    component: PageAboutMeMATUSCHKAComponent
  },
  {
    path: 'stadienbesucheMatuschka',
    component: PageStadienbesucheMatuschkaComponent
  },
  {
    path: 'aboutMeIBRAHIM',
    component: PageAboutMeIBRAHIMComponent
  },
  {
    path: 'aboutMeSINGH',
    component: PageAboutMeSinghComponent
  },
  {
    path: 'aboutMeNAZARI',
    component: PageAboutMeNazariComponent
  },
  {
    path: 'schoeffmann',
    component: SchoeffmannComponent
  },
  {
    path: 'schoeffmann-meine-reisen',
    component: MeineReisenComponent
  },
  // {
  //   path: 'schoeffmann-projekte',
  //   component: ProjekteComponent
  // },
  // {
  //   path: 'schoeffmann-hobbys',
  //   component: HobbysComponent
  // },

  {
    path: 'aboutMeSTOILOV',
    component: PageAboutMeStoilovComponent
  },
  {
    path: 'aboutMeVIRK',
    component: PageAboutMeVIRKComponent
  },
  {
    path: 'reiseorte',
    component: ReiseorteComponent
  },

];


import {Routes} from '@angular/router';
import {PageDemoComponent} from './page-demo/page-demo.component';
import {PageHomeComponent} from './page-home/page-home.component';
import {PageAboutMeKRAPFComponent} from './page-about-me-krapf/page-about-me-krapf.component';
import {PageAboutMeMILLICHComponent} from './page-about-me-millich/page-about-me-millich.component';
import {PageAboutMeKLARICComponent} from './page-about-me-klaric/page-about-me-klaric.component';
import {PageAboutMeAljarrahComponent} from './page-about-me-aljarrah/page-about-me-aljarrah.component';
import {PageAboutMeGEIHSEDERComponent} from './page-about-me-geihseder/page-about-me-geihseder.component';
import {PageAboutMeYOHANNAComponent} from './page-about-me-yohanna/page-about-me-yohanna.component';
import {PageAboutMeMATUSCHKAComponent} from './page-MATUSCHKA/page-about-me-matuschka/page-about-me-matuschka.component';
import {PageAboutMeSenjicComponent} from './pages/page-SENJIC/page-about-me-senjic/page-about-me-senjic.component';
import {PageAboutMeIBRAHIMComponent} from './page-about-me-ibrahim/page-about-me-ibrahim.component';
import {PageAboutMeSinghComponent} from './page-about-me-singh/page-about-me-singh.component';
import {PageAboutMeNazariComponent} from './page-about-me-nazari/page-about-me-nazari.component';
import { SchoeffmannComponent } from './schoeffmann/schoeffmann.component';
import {PageAboutMeVIRKComponent} from './page-about-me-virk/page-about-me-virk.component';
import {PageAboutBeckerComponent} from './page-about-becker/page-about-becker.component';
import {PageMyTravelsSenjicComponent} from './pages/page-SENJIC/page-my-travels-senjic/page-my-travels-senjic.component';
import {
  PageStadienbesucheMatuschkaComponent
} from './page-MATUSCHKA/page-stadienbesuche-matuschka/page-stadienbesuche-matuschka.component';
import {PageMyFutureSenjicComponent} from './pages/page-SENJIC/page-my-future-senjic/page-my-future-senjic.component';
import { MeineReisenComponent } from './schoeffmann/meine-reisen/meine-reisen.component';
import { PageAboutMeStoilovComponent } from './page-about-me-stoilov/page-about-me-stoilov.component';
import { ProjekteComponent } from './schoeffmann/projekte/projekte.component';
import { HobbysComponent } from './schoeffmann/hobbys/hobbys.component';
import {ReiseorteComponent} from './pages/pages-KLARIC/reiseorte/reiseorte.component';


export const routes: Routes = [
  {
    path: '', // default route
    component: PageHomeComponent
  },
  {
    path: 'home',
    component: PageHomeComponent
  },
  {
    path: 'page_demo',
    component: PageDemoComponent
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
  {
    path: 'schoeffmann-projekte',
    component: ProjekteComponent
  },
  {
    path: 'schoeffmann-hobbys',
    component: HobbysComponent
  },

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


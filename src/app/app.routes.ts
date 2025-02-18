import {Routes} from '@angular/router';
import {PageDemoComponent} from './pages/pages-demo/page-demo/page-demo.component';
import {PageHomeComponent} from './pages/page-home/page-home.component';
import {PageAboutMeKRAPFComponent} from './pages/pages-students/pages-KRAPF/page-about-me-krapf/page-about-me-krapf.component';
import {PageAboutMeMILLICHComponent} from './pages/pages-students/pages-MILLICH/page-about-me-millich/page-about-me-millich.component';
import {PageAboutMeKLARICComponent} from './pages/pages-students/page-about-me-klaric/page-about-me-klaric.component';
import {ReiseorteComponent} from './pages/pages-students/pages-KLARIC/reiseorte/reiseorte.component';
import {PageAboutMeAljarrahComponent} from './pages/pages-students/page-about-me-aljarrah/page-about-me-aljarrah.component';
import {PageAboutMeGEIHSEDERComponent} from './pages/pages-students/pages-GEIHSEDER/page-about-me-geihseder/page-about-me-geihseder.component';
import {PageAboutMeYOHANNAComponent} from './pages/pages-students/page-about-me-yohanna/page-about-me-yohanna.component';
import {PageAboutMeMATUSCHKAComponent} from './pages/pages-students/page-MATUSCHKA/page-about-me-matuschka/page-about-me-matuschka.component';
import {PageAboutMeSenjicComponent} from './pages/pages-students/page-SENJIC/page-about-me-senjic/page-about-me-senjic.component';
import {PageAboutMeIBRAHIMComponent} from './pages/pages-students/pages-ibrahim/page-about-me-ibrahim/page-about-me-ibrahim.component';
import {PageAboutMeSinghComponent} from './pages/pages-students/page-SINGH/page-about-me-singh/page-about-me-singh.component';
import {PageAboutMeNazariComponent} from './pages/pages-students/page-NAZARI/page-about-me-nazari/page-about-me-nazari.component';
import { SchoeffmannComponent } from './pages/pages-students/pages-schoeffmann/schoeffmann.component';
import { MeineReisenComponent } from './pages/pages-students/pages-schoeffmann/meine-reisen/meine-reisen.component';
import {PageAboutMeVIRKComponent} from './pages/pages-students/pages-VIRK/page-about-me-virk/page-about-me-virk.component';
import {PageAboutBeckerComponent} from './pages/pages-students/page-BECKER/page-about-me-becker/page-about-becker.component';
import {PageAboutMeineReisenBeckerComponent} from './pages/pages-students/page-BECKER/page-about-meine-reisen-becker/page-about-meine-reisen-becker.component';
import {PageMyTravelsSenjicComponent} from './pages/pages-students/page-SENJIC/page-my-travels-senjic/page-my-travels-senjic.component';
import {PageStadienbesucheMatuschkaComponent} from './pages/pages-students/page-MATUSCHKA/page-stadienbesuche-matuschka/page-stadienbesuche-matuschka.component';
import {PageMyFutureSenjicComponent} from './pages/pages-students/page-SENJIC/page-my-future-senjic/page-my-future-senjic.component';
//STOILOV
import { PageAboutMeStoilovComponent } from './pages/pages-students/pages-STOILOV/page-about-me-stoilov/page-about-me-stoilov.component';
import {PageMeineHobbiesStoilovComponent} from './pages/pages-students/pages-STOILOV/page-meine-hobbies-stoilov/page-meine-hobbies-stoilov.component';
import {PageMeineReiseStoilovComponent} from './pages/pages-students/pages-STOILOV/page-meine-reise-stoilov/page-meine-reise-stoilov.component';
import {PageMeineVisionUndZieleStoilovComponent} from './pages/pages-students/pages-STOILOV/page-meine-vision-und-ziele-stoilov/page-meine-vision-und-ziele-stoilov.component';
//----
import {Subpage1Component} from './pages/pages-demo/subpage1/subpage1.component';
import {Subpage2Component} from './pages/pages-demo/subpage2/subpage2.component';
import {PageMyJerseysSenjicComponent} from './pages/pages-students/page-SENJIC/page-my-jerseys-senjic/page-my-jerseys-senjic.component';
import {PageAboutMeSpelitzComponent} from './pages/pages-students/pages-SPELITZ/page-about-me-spelitz/page-about-me-spelitz.component';

import {PageMeineReisenMatuschkaComponent} from './pages/pages-students/page-MATUSCHKA/page-meine-reisen-matuschka/page-meine-reisen-matuschka.component';
import {ProjekteComponent} from './pages/pages-students/pages-schoeffmann/projekte/projekte.component';
import {HobbysComponent} from './pages/pages-students/pages-schoeffmann/hobbys/hobbys.component';

import {
  PageThailandreiseMatuschkaComponent
} from './pages/pages-students/page-MATUSCHKA/page-thailandreise-matuschka/page-thailandreise-matuschka.component';
import {
  PageAboutMeineReisenComponent
} from './pages/pages-students/page-NAZARI/page-meine-reisen-nazari/page-about-meine-reisen.component';
import {
  MeineReisenGeihsederComponent
} from './pages/pages-students/pages-GEIHSEDER/meine-reisen-geihseder/meine-reisen-geihseder.component';
import {
  MeineZieleGeihsederComponent
} from './pages/pages-students/pages-GEIHSEDER/meine-ziele-geihseder/meine-ziele-geihseder.component';
import {
  PageReisenKrapfComponent
} from './pages/pages-students/pages-KRAPF/page-reisen-krapf/page-reisen-krapf.component';
import {
  PageReisezieleKrapfComponent
} from './pages/pages-students/pages-KRAPF/page-reiseziele-krapf/page-reiseziele-krapf.component';
import {
  PageHobbiesKrapfComponent
} from './pages/pages-students/pages-KRAPF/page-hobbies-krapf/page-hobbies-krapf.component';
import {
  PageMeineReisenMILLICHComponent
} from './pages/pages-students/pages-MILLICH/page-meine-reisen-millich/page-meine-reisen-millich.component';
import {
  PageMeineAusbildungMillichComponent
} from './pages/pages-students/pages-MILLICH/page-meine-ausbildung-millich/page-meine-ausbildung-millich.component';
import {HobbiesComponent} from './pages/pages-students/pages-KLARIC/hobbies/hobbies.component';
import {
  PageMeineTraumreisezieleNazariComponent
} from './pages/pages-students/page-NAZARI/page-meine-traumreiseziele-nazari/page-meine-traumreiseziele-nazari.component';
import {
  PageMeineKonzerteNazariComponent
} from './pages/pages-students/page-NAZARI/page-meine-konzerte-nazari/page-meine-konzerte-nazari.component';
import {
  PageMyGoalsVirkComponent
} from './pages/pages-students/pages-VIRK/page-my-goals-virk/page-my-goals-virk.component';
import {
  PageMyStadiumVisitsVirkComponent
} from './pages/pages-students/pages-VIRK/page-my-stadium-visits-virk/page-my-stadium-visits-virk.component';
import {
  PageMyTravelsVirkComponent
} from './pages/pages-students/pages-VIRK/page-my-travels-virk/page-my-travels-virk.component';
import {
  MeineReisenSpelitzComponent
} from './pages/pages-students/pages-SPELITZ/meine-reisen-spelitz/meine-reisen-spelitz.component';
import {
  SportHistorieSpelitzComponent
} from './pages/pages-students/pages-SPELITZ/sport-historie-spelitz/sport-historie-spelitz.component';

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
    path: 'aboutMeKrapf',
    component: PageAboutMeKRAPFComponent
  },
  {
    path: 'reisenKrapf',
    component: PageReisenKrapfComponent
  },
  {
    path: 'reisezieleKrapf',
    component: PageReisezieleKrapfComponent
  },
  {
    path: 'hobbiesKrapf',
    component: PageHobbiesKrapfComponent
  },
  {
    path: 'about_meMILLICH',
    component: PageAboutMeMILLICHComponent
  },
  {
    path: 'meineReisenMillich',
    component: PageMeineReisenMILLICHComponent
  },
  {
    path: 'meineAusbildungMillich',
    component: PageMeineAusbildungMillichComponent
  },
  {
    path: 'aboutMeBECKER',
    component: PageAboutBeckerComponent
  },
  {
    path: 'meineReisenBecker',
    component: PageAboutMeineReisenBeckerComponent
  },
  {
    path: 'aboutMeKLARIC',
    component: PageAboutMeKLARICComponent
  },
  {
    path: 'hobbies',
    component: HobbiesComponent
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
    path: 'meine-reisen-geihseder',
    component: MeineReisenGeihsederComponent
  },
  {
    path: 'meine-ziele-geihseder',
    component: MeineZieleGeihsederComponent
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
    path: 'MyJerseysSENJIC',
    component: PageMyJerseysSenjicComponent
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
    path: 'meinereisenMatuschka',
    component: PageMeineReisenMatuschkaComponent
  },
  {
    path: 'thailandreisenMatuschka',
    component: PageThailandreiseMatuschkaComponent
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
    path: 'meineReisen',
    component: PageAboutMeineReisenComponent
  },
  {
    path: 'meineTraumreiseziele',
    component: PageMeineTraumreisezieleNazariComponent
  },
  {
    path: 'meineKonzerte',
    component: PageMeineKonzerteNazariComponent
  },
  {
    path: 'pages-schoeffmann',
    component: SchoeffmannComponent
  },
  {
    path: 'pages-schoeffmann-meine-reisen',
    component: MeineReisenComponent
  },
   {
     path: 'pages-schoeffmann-projekte',
     component: ProjekteComponent
   },
   {
     path: 'pages-schoeffmann-hobbys',
     component: HobbysComponent
   },

  //STOILOV
  {
    path: 'aboutMeSTOILOV',
    component: PageAboutMeStoilovComponent
  },
  {
    path: 'meineHobbiesSTOILOV',
    component: PageMeineHobbiesStoilovComponent
  },
  {
    path: 'meineReiseSTOILOV',
    component: PageMeineReiseStoilovComponent
  },
  {
    path: 'meineVisionUndZieleSTOILOV',
    component: PageMeineVisionUndZieleStoilovComponent
  },
  //---------
  {
    path: 'aboutMeVIRK',
    component: PageAboutMeVIRKComponent
  },
  {
    path: 'pageMyGoalsVIRK',
    component: PageMyGoalsVirkComponent
  },

  {
    path: 'pageMyStadiumVisitsVIRK',
    component: PageMyStadiumVisitsVirkComponent
  },

  {
    path: 'pageMyTravelsVIRK',
    component: PageMyTravelsVirkComponent
  },
  {
    path: 'reiseorte',
    component: ReiseorteComponent
  },
  {
    path: 'aboutMeSPELITZ',
    component: PageAboutMeSpelitzComponent
  },
  {
    path: 'meinereisenSpelitz',
    component: MeineReisenSpelitzComponent
  },
  {
    path: 'sporthistorieSpelitz',
    component: SportHistorieSpelitzComponent
  }
];


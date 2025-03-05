import { Component } from '@angular/core';
import {KRAPF} from "../../../../model/person";

@Component({
  selector: 'app-footer-krapf',
  imports: [],
  templateUrl: './footer-krapf.component.html',
  styleUrl: './footer-krapf.component.scss'
})
export class FooterKrapfComponent {

    protected readonly me = KRAPF;
}

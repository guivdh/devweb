import { Component, OnInit, Input } from '@angular/core';

import { Responsible } from '../../services/api/api.service';

@Component({
  selector: 'app-responsible',
  templateUrl: './responsible.component.html',
  styleUrls: ['./responsible.component.scss'],
})
export class ResponsibleComponent implements OnInit {


  @Input() responsible: Responsible;

  constructor() { }

  ngOnInit() {}



  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

}

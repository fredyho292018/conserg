import { Component, OnInit, Input} from '@angular/core';

import { ServeI } from 'src/app/services/serveconsergue.service';

@Component({
  selector: 'app-cardservice',
  templateUrl: './cardservice.component.html',
  styleUrls: ['./cardservice.component.scss']
})
export class CardserviceComponent implements OnInit {
  @Input() servicio: ServeI = null;
  constructor() { }

  ngOnInit() {
  }

}

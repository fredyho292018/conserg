import { Component, OnInit, Input} from '@angular/core';

import { ServeI } from 'src/app/services/serveconsergue.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() servicio: ServeI = null;
  constructor() { }

  ngOnInit() {
  }

}

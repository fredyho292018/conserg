import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ServeconsergueService, ServeI } from 'src/app/services/serveconsergue.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() servicio: ServeI = null;
  @Input() index: number;
  constructor(private ro: Router) { }
  verServicio( id: number) {
    this.ro.navigate(['/services', id]);
  }
  ngOnInit() {
  }

}

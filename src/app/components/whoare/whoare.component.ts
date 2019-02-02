import { Component, OnInit } from '@angular/core';
import { ContactoI, ServeconsergueService } from '../../services/serveconsergue.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-whoare',
  templateUrl: './whoare.component.html',
  styleUrls: ['./whoare.component.scss']
})
export class WhoareComponent implements OnInit {

  contact: ContactoI = null;
  
  constructor(public translate: TranslateService, private _serveconsergueService: ServeconsergueService) { 
    this.contact = this._serveconsergueService.getContacto();
  }

  ngOnInit() {
  }

}

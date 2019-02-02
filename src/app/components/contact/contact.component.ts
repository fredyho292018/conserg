import { Component, OnInit, Input } from '@angular/core';
import { ServeconsergueService, ServeI, ContactoI } from 'src/app/services/serveconsergue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: ContactoI = null;
  paginas: string[] = [];
  otherservices: string[] = [];
  column1: number = 6;
  column2: number = 6;

  @Input()
  public contactHomePage: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private _activatedRoute: ActivatedRoute, private _serveconsergueService: ServeconsergueService, private ro: Router, public translate: TranslateService) {
    this.contact = this._serveconsergueService.getContacto();
    this.paginas = this._serveconsergueService.getPaginas();
    this.otherservices = this._serveconsergueService.getOtherServices();
  }

  ngOnInit() {
    this.contactHomePage = this.contactHomePage != undefined ? this.contactHomePage : true;
    if(!this.contactHomePage){
      this.column1 = 8;
      this.column2 = 4;
    }
  }
}

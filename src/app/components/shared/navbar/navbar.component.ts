import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  lenguaje: string[] = ['Español', 'English'];
  constructor(public translate: TranslateService) { }
  cambiar(idioma: string) {
    if ( idioma == 'Español') {
      this.translate.use('es');
    }
    if ( idioma == 'English') {
      this.translate.use('en');
    }

  }
  ngOnInit() {
  }

}

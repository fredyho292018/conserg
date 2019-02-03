import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTES } from './app.routes';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

// ---------------------
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CardComponent } from './components/card/card.component';
import { JumbotronComponent } from './components/shared/jumbotron/jumbotron.component';
import { CardserviceComponent } from './components/cardservice/cardservice.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TrimPipe } from './pipes/trim.pipe';
import { WhoareComponent } from './components/whoare/whoare.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RequirementsComponent } from './components/requirements/requirements.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  // return new TranslateHttpLoader(httpClient, './assets/translate/', '.json');
  return new TranslateHttpLoader(httpClient, './assets/translate/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ServiceComponent,
    ServicesComponent,
    ContactComponent,
    PagenotfoundComponent,
    CardComponent,
    JumbotronComponent,
    CardserviceComponent,
    CarouselComponent,
    TrimPipe,
    WhoareComponent,
    PresentationComponent,
    RequirementsComponent

   ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }}),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

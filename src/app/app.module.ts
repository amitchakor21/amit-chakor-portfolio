import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';
import { CardComponent } from './home/card/card.component';
import { AboutComponent } from './home/about/about.component';
import { TimelineComponent } from './home/timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SlideshowComponent,
    CardComponent,
    AboutComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    MDBBootstrapModule.forRoot()

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

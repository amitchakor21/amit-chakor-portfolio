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
import { RoboconComponent } from './home/robocon/robocon.component';
import { SvgRepeaterComponent } from './home/svg-repeater/svg-repeater.component';
import { SvgRepeaterBottomComponent } from './home/svg-repeater-bottom/svg-repeater-bottom.component';
import { RoboconpageComponent } from './roboconpage/roboconpage.component';
import { HeroComponent } from './home/hero/hero.component';
import { HederComponent } from './heder/heder.component';
import { FoterComponent } from './foter/foter.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SlideshowComponent,
    CardComponent,
    AboutComponent,
    TimelineComponent,
    RoboconComponent,
    SvgRepeaterComponent,
    SvgRepeaterBottomComponent,
    RoboconpageComponent,
    HeroComponent,
    HederComponent,
    FoterComponent,
    NotFoundComponent,
    DisclaimerComponent,
    PrivacyComponent
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

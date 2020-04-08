import { MapPageComponent } from './map-page/map-page.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

import { McServerStatusCard } from './mc-server-status-card/mc-server-status-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ScreenshotCarouselComponent } from './screenshot-carousel/screenshot-carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
   declarations: [
     NavBarComponent,
     AppComponent,
      PlayerListComponent,
      LandingPageComponent,
      ScreenshotCarouselComponent,
      PlayerDetailsComponent,
      MapPageComponent,
      McServerStatusCard
   ],
   imports: [
     NgbModule,
     HttpClientModule,
      BrowserModule,
      RouterModule.forRoot([
        {path: '', component: LandingPageComponent},
        {path: 'players', component: PlayerListComponent},
        {path: 'player/:playerUuid', component: PlayerDetailsComponent},
        {path: 'map', component: MapPageComponent}
      ])
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }

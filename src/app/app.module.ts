import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {AnimateScrollModule} from 'ng-animate-scroll';
import {HomeComponent} from './home/home.component';
import {ReposLeaderboardComponent} from './home/repos-leaderboard/repos-leaderboard.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ProfileCardComponent} from './profile-page/user-profile-card/user-card.component';
import {ReposListCardComponent} from './profile-page/repos-list-card/repos-list-card.component';
import {UserProfileCardModule} from './profile-page/user-profile-card/user-profile-card.module';
import {ReposListCardModule} from './profile-page/repos-list-card/repos-list-card.module';
import {CardsStructureModule} from './cards/structure/card-structure.module';
import {ContributorsLeaderboardComponent} from './home/contributors-leaderboard/contributors-leaderboard.component';
import {LanguagesChartComponent} from './profile-page/languages-chart/languages-chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NavbarComponent} from './navbar/navbar.component';
import {ReposTableComponent} from './repos-table/repos-table.component';
import {ScrollButtonComponent} from './home/scroll-button/scroll-button.component';
import { GraphsComponent } from './home/graphs/graphs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReposLeaderboardComponent,
    ContributorsLeaderboardComponent,
    ProfilePageComponent,
    ProfileCardComponent,
    ReposListCardComponent,
    LanguagesChartComponent,
    NavbarComponent,
    ReposTableComponent,
    ScrollButtonComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    UserProfileCardModule,
    ReposListCardModule,
    CardsStructureModule,
    NgxChartsModule,
    AnimateScrollModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppsideMenuComponent } from './components/appside-menu/appside-menu.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TypographyComponent } from './components/typography/typography.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppsideMenuComponent,
    AppfooterComponent,
    DashboardComponent,
    TableListComponent,
    TypographyComponent,
    UserprofileComponent,
    IconsComponent,
    MapsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

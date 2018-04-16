import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TypographyComponent } from './components/typography/typography.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,pathMatch: 'full' },
  { path: 'table', component: TableListComponent ,pathMatch: 'full'},
  { path: 'typography', component: TypographyComponent ,pathMatch: 'full'},
  { path: 'userprofile', component: UserprofileComponent ,pathMatch: 'full'},
  { path: 'icons', component: IconsComponent ,pathMatch: 'full'},
  { path: 'maps', component: MapsComponent ,pathMatch: 'full'},
   // otherwise redirect to home
  { path: '', redirectTo: '/table', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

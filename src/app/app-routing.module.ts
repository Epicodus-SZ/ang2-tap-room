import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TRListComponent }  from './tr-list.component';
import { KegDetailComponent }  from './tr-details.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: KegDetailComponent },
  { path: 'kegs', component: TRListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

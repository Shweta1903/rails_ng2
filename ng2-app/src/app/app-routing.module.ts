import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { WidgetsComponent } from './widgets/widgets.component';

import { BookingComponent } from './booking/index';

import { UsersComponent } from './users/users.component';

import { AddMoreComponent } from './add-more/add-more.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'widgets', component: WidgetsComponent },
  {path: 'booking', component: BookingComponent },
  {path: 'users', component: UsersComponent },
  {path: 'add-more', component: AddMoreComponent},
  {path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
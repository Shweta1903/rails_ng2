import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsService } from './shared/widgets.service';

import { BookingComponent } from './booking/index';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UsersComponent } from './users/users.component';
import { UsersService } from './shared/users.service';
import { AddMoreComponent } from './add-more/add-more.component';


@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    HomeComponent,
    BookingComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    AddMoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RestAppRoutingModule
  ],
  providers: [
    WidgetsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
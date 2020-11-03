import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { selectRoleComponent } from './selectRole/selectRole.component';


@NgModule({
  declarations: [
    AppComponent,
    selectRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    //DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

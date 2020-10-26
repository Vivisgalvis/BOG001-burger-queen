import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenubreakfastComponent} from './menubreakfast/menubreakfast.component';

const routes: Routes = [
  {
    path:"",
    component:MenubreakfastComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

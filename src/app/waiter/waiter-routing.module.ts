import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectTableComponent } from './selectTable/select-table.component';
import { createOrderComponent} from './createOrder/createOrder.component';

const routes: Routes = [
  {
    path:'',
    component:SelectTableComponent,
    children: [
      path: 'createOrder',
      Component:createOrderComponent,

    ]
    // creación de las rutas hijas del modulo de waiter para cuando le demos click al boton
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }


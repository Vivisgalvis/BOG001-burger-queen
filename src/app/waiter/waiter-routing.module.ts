import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderItemOptionsModalComponent } from './create-order/order-item-options-modal/order-item-options-modal.component';
import { SelectTableComponent } from './select-table/select-table.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "select-table"
  },
  {
    path: "select-table",
    component: SelectTableComponent
  },
  {
    path: "create-order",
    component: CreateOrderComponent
  },
  {
    path:"option-modal",
    component : OrderItemOptionsModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }


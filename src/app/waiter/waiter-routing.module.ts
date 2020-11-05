import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }

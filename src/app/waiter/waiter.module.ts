import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WaiterRoutingModule } from './waiter-routing.module';
import { SelectTableComponent } from './select-table/select-table.component';
import { CreateOrderComponent } from './create-order/create-order.component';



@NgModule({
  declarations: [SelectTableComponent, CreateOrderComponent],
  imports: [
    CommonModule,
    WaiterRoutingModule,
    ReactiveFormsModule
  ]
})
export class WaiterModule { }

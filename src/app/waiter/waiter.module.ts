import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterRoutingModule } from './waiter-routing.module';
import {createOrderComponent} from './createOrder/createOrder.component';
import { SelectTableComponent } from './selectTable/select-table.component'
  


@NgModule({
  declarations: [SelectTableComponent],
  imports: [
    CommonModule,
    WaiterRoutingModule,
    createOrderComponent
  ]
})
export class WaiterModule { }

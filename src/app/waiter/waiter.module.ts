import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterRoutingModule } from './waiter-routing.module';
import {createOrderComponent} from './createOrder/createOrder.component'
  


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WaiterRoutingModule,
    createOrderComponent
  ]
})
export class WaiterModule { }

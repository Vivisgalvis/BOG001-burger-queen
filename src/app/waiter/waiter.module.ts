import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaiterRoutingModule } from './waiter-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';


@NgModule({
  declarations: [CreateOrderComponent],
  imports: [
    CommonModule,
    WaiterRoutingModule
  ]
})
export class WaiterModule { }

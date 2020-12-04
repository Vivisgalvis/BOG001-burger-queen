import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterRoutingModule } from './waiter-routing.module';
import { SelectTableComponent } from './select-table/select-table.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ReactiveFormsModule,} from '@angular/forms';
import { Injectable } from '@angular/core';
import { CreateOrderItemComponent } from './create-order/create-order-item/create-order-item.component';
import { OrderSummaryComponentComponent } from './create-order/order-summary-component/order-summary-component.component';
import { OrderItemOptionsModalComponent } from './create-order/order-item-options-modal/order-item-options-modal.component';
@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [SelectTableComponent, CreateOrderComponent, CreateOrderItemComponent, OrderSummaryComponentComponent, OrderItemOptionsModalComponent],
  imports: [
    CommonModule,
    WaiterRoutingModule,
    ReactiveFormsModule, //injecto este modulo en los imports
  ]
})
export class WaiterModule { }

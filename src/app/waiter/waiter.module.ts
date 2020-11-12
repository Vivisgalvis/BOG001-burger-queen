import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterRoutingModule } from './waiter-routing.module';
import { SelectTableComponent } from './select-table/select-table.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ReactiveFormsModule,} from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [SelectTableComponent, CreateOrderComponent],
  imports: [
    CommonModule,
    WaiterRoutingModule,
    ReactiveFormsModule, //injecto este modulo en los imports
  ]
})
export class WaiterModule { }

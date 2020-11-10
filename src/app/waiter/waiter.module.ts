import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';

=======
>>>>>>> 620bc6b56700f5fd48242aa065fbe56546ea9294
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
<<<<<<< HEAD
    ReactiveFormsModule
=======
    ReactiveFormsModule, //injecto este modulo en los imports
>>>>>>> 620bc6b56700f5fd48242aa065fbe56546ea9294
  ]
})
export class WaiterModule { }

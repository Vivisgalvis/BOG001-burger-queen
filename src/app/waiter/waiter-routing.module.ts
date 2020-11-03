import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { createOrderComponent} from './createOrder/createOrder.component';

const routes: Routes = [
  {
    path:'createOrder',
    component:createOrderComponent,
    children: [// creación de las rutas hijas del modulo de waiter para cuando le demos click al boton
      {
        path: "",
        redirectTo: 'waiter-child',
        pathMatch: 'full'
      },
      {
        path: 'waiter-child',
        loadChildren: './modules/waiter/child/child.module#ChildModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }

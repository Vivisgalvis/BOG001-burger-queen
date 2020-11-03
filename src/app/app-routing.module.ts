import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { createOrderComponent} from './waiter/createOrder/createOrder.component';
import { selectRoleComponent } from './selectRole/selectRole.component';

const routes: Routes = [
  { path:'',
    component:selectRoleComponent,
  },
  {
    path:'createOrder',
    component:createOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

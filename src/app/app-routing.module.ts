import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { selectRoleComponent } from './selectRole/selectRole.component';

const routes: Routes = [
  { path:'',
    component:selectRoleComponent,
  },
  {
    path:'waiter',
    loadChildren: () => import ('./waiter/waiter-routing.module').then(m => m.WaiterRoutingModule) //aquí vamos enrutando . Lazy Loading 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

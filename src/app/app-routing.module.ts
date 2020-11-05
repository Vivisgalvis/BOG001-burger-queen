import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { selectRoleComponent } from './selectRole/selectRole.component';

const routes: Routes = [
  { path:'',
    component:selectRoleComponent,
  },
  {
    path:'Waiter',
    loadChildren: () => import ('./waiter/waiter-routing.module').then(any=>any) //aquí vamos enrutando . Lazy Loading 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

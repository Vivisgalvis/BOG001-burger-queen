import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { selectRoleComponent } from './selectRole/selectRole.component';

const routes: Routes = [
  { path:'',
    component:selectRoleComponent,
  },
  {
    path:'Waiter',
    loadChildren: './modules/waiter/waiter.module#waiterModule' //aquí vamos enrutando . Lazy Loading 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

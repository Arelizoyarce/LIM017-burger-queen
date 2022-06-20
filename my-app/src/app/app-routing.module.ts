import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from './components/log-in/log-in.component';
import {TakeOrdersComponent} from './components/take-orders/take-orders.component';
import {ChefViewComponent} from './components/chef-view/chef-view.component'
const routes: Routes = [ 
  {path: 'log-in' , component: LogInComponent},
  {path: 'take-orders', component: TakeOrdersComponent},
  {path: 'chef-view', component: ChefViewComponent},
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

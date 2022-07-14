import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from './components/log-in/log-in.component';
import {TakeOrdersComponent} from './components/waiter-view/take-orders/take-orders.component';
import {ChefViewComponent} from './components/chef/chef-view/chef-view.component'
import { OrdersComponent } from './components/chef/orders/orders.component';
const routes: Routes = [ 
  {path: 'log-in' , component: LogInComponent},
  {path: 'take-orders', component: TakeOrdersComponent, children:[
    {path: 'orders', component: OrdersComponent}
  ]},
  {path: 'chef-view', component: ChefViewComponent},
  {path: 'orders', component: OrdersComponent},
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

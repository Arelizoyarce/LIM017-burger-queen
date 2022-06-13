import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LogInComponent} from './log-in/log-in.component';
import{TakeOrdersComponent}from './take-orders/take-orders.component'
const routes: Routes = [
  {path: 'log-in' , component: LogInComponent},
  {path: 'take-orders', component: TakeOrdersComponent},
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

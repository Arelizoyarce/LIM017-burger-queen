import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-orders',
  templateUrl: './take-orders.component.html',
  styleUrls: ['./take-orders.component.css']
})
export class TakeOrdersComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {

  }

  viewOrders(){
this.router.navigate(['view-orders'])
  }
}

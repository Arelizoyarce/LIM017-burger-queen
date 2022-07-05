import { Component, OnInit } from '@angular/core';
import sendOrderList from 'src/app/interfaces/send-order.interface';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: sendOrderList[] = []
  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    console.log(this.printOrder())
  }
  printOrder() {
    this.firestore.getOrder().subscribe((order) => {
      this.orders = order
    })
  }
}

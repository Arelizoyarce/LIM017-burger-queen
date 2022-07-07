import { Component, OnInit } from '@angular/core';
import receivedOrderFirestore from 'src/app/interfaces/received-order-firestore';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: receivedOrderFirestore[] = []
  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getOrder().subscribe((order) => {
      this.orders = order
    })
  }

  changeStatusOrder(index: number){
    const statusValue = this.orders[index].status = 'Done'
    this.firestore.updateStatus(this.orders[index].id , statusValue)
  }
}

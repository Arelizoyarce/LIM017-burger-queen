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
    this.firestore.getOrder().subscribe((order) => {
      console.log('soy order', order)
      this.orders = order
    })
  }

  // changeStatusOrder(timepara: number){
  //   this.orders.map(element =>{
  //     if(element.time === timepara){

  //     }
  //   })
  // }
}

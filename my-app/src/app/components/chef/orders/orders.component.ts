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
  oneSummaryOrder: any[] = []
  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    console.log(this.printOrder())
  }
  printOrder() {
    this.firestore.getOrder().subscribe((order) => {
      console.log('soy order', order)
      this.orders = order
      order.forEach((ordenes) => {
        this.oneSummaryOrder.push(ordenes.order)
      })
    })
    return this.oneSummaryOrder
  }

  // changeStatusOrder(timepara: number){
  //   this.orders.map(element =>{
  //     if(element.time === timepara){

  //     }
  //   })
  // }
}

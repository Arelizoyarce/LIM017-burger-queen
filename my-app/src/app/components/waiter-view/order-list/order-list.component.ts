import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faCircleMinus, faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import orderProduct from 'src/app/interfaces/order-product.interface';
import sendOrderList from 'src/app/interfaces/send-order.interface';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnChanges {
  faTrashCan = faTrashCan;
  faCirclePlus = faCirclePlus;
  faCircleMinus = faCircleMinus;
  finalOrder: sendOrderList;
  nameClient = new FormControl('', []);
  table = new FormControl('', []);
  time: string= new Date().toLocaleTimeString()
  total: number = 0;
  timer: number=0;

  @Input() orderListProduct: orderProduct[]
  constructor(private firestore: FirestoreService) { }
  
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['orderListProduct']['currentValue'])
  }

  ngOnInit(): void {
    console.log('ORDERFINAL', this.orderListProduct)
    this.totalPrice()
  }

  // amountIncrements(name: string) {
  //   this.orderListProduct.forEach(e => {
  //     if (e['name'] === name) {
  //       e['amount'] += 1
  //       e['price'] += e['price']
  //     }
  //   })
  // }

  // amountDecrace(name: string) {
  //   this.orderListProduct.forEach(e => {
  //     if (e['name'] === name) {
  //       e['amount'] -= 1
  //       e['price'] -= e['price']/2
  //     }
  //   })
  // }

  deleteProduct(index: number) {
    return this.orderListProduct.splice(index, 1)
  }

  totalPrice() {
    const arrayPrices = []
    this.orderListProduct.forEach(e => {
      return arrayPrices.push(e['price'])
    })
    const result = arrayPrices.reduce((acc, item) => acc + item, 0)
    return this.total = result
  }

  sendOrder() {
    this.finalOrder = {
      client : this.nameClient.value,
      table: this.table.value,
      order: this.orderListProduct,
      time: this.time,
      status: 'Pending',
      total: this.total,
      timer: this.timer
    }
    this.firestore.addOrder(this.finalOrder)
    this.orderListProduct =[]
    this.nameClient.reset();
    this.table.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import orderProduct from 'src/app/interfaces/order-product.interface';
import Product from 'src/app/interfaces/product.interface';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  menu: Product[];
  summary: orderProduct[] = [];
  dishesOrder: orderProduct;
  indexProduct: number = 0
  constructor(
    private firestore: FirestoreService
  ) { }

  ngOnInit(): void {
    this.printData()
  }
  printData() {
    this.firestore.getDataProducts().subscribe(dishes => {
      this.menu = dishes
    })
  }

  sendProduct(name: string, price: number, amount: number) {
    const index = this.indexProduct++;
    this.dishesOrder = {name, price, amount,index}
    this.summary.push(this.dishesOrder)
    console.log('SOY EL SUMARIO', this.summary)
  }
}



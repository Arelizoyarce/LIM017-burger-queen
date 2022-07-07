import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import orderProduct from 'src/app/interfaces/order-product.interface';
import Product from 'src/app/interfaces/product.interface';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  allProducts: any[] =[];
  menu: Product[];
  summary: orderProduct[] = [];
  dishesOrder: orderProduct;
  indexProduct: number = 0

  constructor(
    private firestore: FirestoreService
  ) { }
  ngOnInit(): void {
    this.firestore.getDataProducts().subscribe(dishes=>{
      this.allProducts= dishes
      this.menu = this.allProducts
    })
  }
  
  filterEvent(type: string) {
    if(type ==='all'){
      this.menu = this.allProducts
    }else{
      const arrayFilter: any[] =[];
      this.allProducts.forEach(e=>{
        if(e['type']===type){
          arrayFilter.push(e)
        }
      })
      this.menu= arrayFilter
    }
    return this.menu
  }

  sendProduct(name: string, price: number, amount: number) {
    const index = this.indexProduct++;
    this.dishesOrder = { name, price, amount, index }
    this.summary.push(this.dishesOrder)
    console.log('SOY EL SUMARIO', this.summary)
  }
}



import { Component, Input, OnInit} from '@angular/core';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
menu: any[] = [];
product: any[] =[];

  constructor(
    private firestore : FirestoreService
  ) { }
  ngOnInit(): void {
    this.printData()
  }
  printData(){
    this.firestore.getDataProducts()
    .subscribe((result)=>{
      result.forEach(e =>{
        this.menu.push({
          name: e['name'],
          price: e['price'],
          img: e['img']
        })
      })
    })
  }

sendProduct( name: string, price: number){
this.product.push({
  product: name,
  cost: price
})
}}



import { Component, OnInit} from '@angular/core';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';
import { faTrashCan, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  faTrashCan = faTrashCan;
  faCirclePlus = faCirclePlus;
  faCircleMinus = faCircleMinus;
  menu: any[] = [];
  constructor(
    private firestore : FirestoreService
  ) { }
  ngOnInit(): void {
    this.printData()
  }
  printData(){
    this.firestore.getDataProducts()
    .subscribe((menu)=>{
      this.menu = [];
      menu.forEach(e =>{
        this.menu.push({
          name: e['name'],
          price: e['price'],
          img: e['img']
        })
      })
    })
  }
}
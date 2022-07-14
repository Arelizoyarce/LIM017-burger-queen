import { Component, OnInit } from '@angular/core';
import receivedOrderFirestore from 'src/app/interfaces/received-order-firestore';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';
import {MatDialog} from '@angular/material/dialog';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  updateDate: string;
  faTrash = faTrash;
  allProducts = [];
  orders: receivedOrderFirestore[] = []
 
  constructor(private firestore: FirestoreService,
    public modal: MatDialog,
  public router: Router) { }

  ngOnInit(): void {
    this.firestore.getOrder().subscribe((order) => {
      this.allProducts= order
      this.orders = this.allProducts
    })
  }

  changeStatusOrder(index: number){
    const statusValue = this.orders[index].status = 'Done'
    const date = new Date()
    this.updateDate = `${date.toString().slice(0,-33)}`
    this.firestore.updateTime(this.orders[index].id , this.updateDate)
    this.firestore.updateStatus(this.orders[index].id , statusValue)
  }

  filterEvent(type:string){
    if(type ==='All'){
      this.orders = this.allProducts
    }else{
      const arrayFilter: any[] =[];
      this.allProducts.forEach(e=>{
        if(e['status']===type){
          arrayFilter.push(e)
        }
      })
      this.orders= arrayFilter
    }
    return this.orders
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.modal.open(ModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  deleteOrder(id: string){
    this.firestore.deleteOrder(id)
  }

//   timeLeft: number = 0;
//   timeMinute: number;
//   interval: NodeJS.Timer

//   startTimer(minute : number): string {
//     this.interval = setInterval(()=> {
//      if(this.timeLeft < 0) {
//        this.timeLeft--;
//      } else {
//        this.timeLeft += 1;
//        if(this.timeLeft === 60000){
//          const timeMinute= minute+= 1
//          this.timeLeft = 0
//        }
//      }
//    },1000)
//    this.firestore.updateTimer(id, this.timeMinute)
//    return `${this.timeMinute}min`
//  }

//  pauseTimer() {
//    clearInterval(this.interval);
//  }
}

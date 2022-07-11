import { Component, OnInit, ViewChild } from '@angular/core';
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
  faTrash = faTrash
  allProducts: any[]=[]
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

  timeLeft: number;
  timeMinute: number
interval

  startTimer() {
    console.log('estoy siendo ejecutado')
    return this.interval = setInterval(()=> {
     if(this.timeLeft < 0) {
       this.timeLeft--;
     } else {
       this.timeLeft += 1;
       if(this.timeLeft === 60){
         this.timeMinute += 1
         this.timeLeft = 0
       }
     }
   },1000)
 }

 pauseTimer() {
   clearInterval(this.interval);
 }
}

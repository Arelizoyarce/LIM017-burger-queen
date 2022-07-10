import { Component, OnInit, ViewChild } from '@angular/core';
import receivedOrderFirestore from 'src/app/interfaces/received-order-firestore';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';
import {MatDialog} from '@angular/material/dialog';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TimeInterface } from 'angular-cd-timer';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @ViewChild('basicTimer') timer!: TimeInterface;
  faTrash = faTrash
  allProducts: any[]=[]
  orders: receivedOrderFirestore[] = []
  timerForEachOrder: Array<number> = Array(10);
  constructor(private firestore: FirestoreService,
    public modal: MatDialog,
  public router: Router) { }

  ngOnInit(): void {
    this.firestore.getOrder().subscribe((order) => {
      this.timerForEachOrder.length = order.length;
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

  updateTimer(component: any, index: number){
    this.timerForEachOrder[index] = component.hours*3600 + component.minutes*60 + component.seconds;
  }

  deleteOrder(id: string){
    this.firestore.deleteOrder(id)
  }
}

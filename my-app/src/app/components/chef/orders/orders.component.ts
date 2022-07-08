import { Component, OnInit } from '@angular/core';
import receivedOrderFirestore from 'src/app/interfaces/received-order-firestore';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  allProducts: any[]=[]
  orders: receivedOrderFirestore[] = []
  constructor(private firestore: FirestoreService,
    public modal: MatDialog) { }

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
}

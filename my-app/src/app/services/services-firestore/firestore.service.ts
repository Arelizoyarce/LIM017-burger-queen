import { Injectable } from '@angular/core';
import { collection, Firestore, getDoc, doc, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Product from 'src/app/interfaces/product.interface';
import sendOrderList from 'src/app/interfaces/send-order.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  async getUserRole(id: string) {
    const e = await getDoc(doc(this.firestore, 'users', id));
    return e.data();
  }
  
  getDataProducts(): Observable<Product[]> {
    return collectionData(collection(this.firestore, 'menu'), { idField: 'id' }) as Observable<Product[]>
  }

  addOrder(order: sendOrderList) {
    return addDoc(collection(this.firestore, 'orders'), order)
  }

  getOrder(): Observable<sendOrderList[]>{
    return collectionData(collection(this.firestore, 'orders'), {idField: 'id'}) as Observable<sendOrderList[]>
  }
}


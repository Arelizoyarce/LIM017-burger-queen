import { Injectable } from '@angular/core';
import { collection, Firestore, getDoc, doc, collectionData, addDoc } from '@angular/fire/firestore';
import { deleteDoc, updateDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import Product from 'src/app/interfaces/product.interface';
import receivedOrderFirestore from 'src/app/interfaces/received-order-firestore';
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

  deleteOrder(order:receivedOrderFirestore){
  const orderDocRef= doc(this.firestore, `orders/${order.id}`);
  return deleteDoc(orderDocRef);
  }

  updateStatus(id: string, statusValue: string): any {
    const docRef= doc(this.firestore, 'orders', id)
    return updateDoc(docRef, { status: statusValue})
  }
}


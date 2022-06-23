import { Injectable } from '@angular/core';
import { collection, Firestore, getDoc,doc, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore : Firestore) { }
  async getUserRole(id: string){
    const e = await getDoc(doc(this.firestore, 'users', id));
     return e.data();
    }
}
  //  getDataProducts(){
  //   return collectionData(collection(this.firestore, 'menu'), {
  //   })
  //  }

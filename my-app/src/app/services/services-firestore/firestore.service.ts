import { Injectable } from '@angular/core';
import { collection, Firestore, getDoc,doc, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore : Firestore) { }
   getUserRole(id: string){
    return getDoc(doc(this.firestore, 'users', id));
   }
  //  getDataProducts(){
  //   return collectionData(collection(this.firestore, 'menu'), {
  //   })
  //  }
}

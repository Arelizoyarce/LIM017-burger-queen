import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
// import { getAuth, onAuthStateChanged } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor( private auth: Auth) { }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout(){
    return signOut(this.auth)
  }
}


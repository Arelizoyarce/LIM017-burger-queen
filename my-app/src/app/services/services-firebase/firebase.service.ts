import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, UserCredential} from '@angular/fire/auth';
import { UrlSegment } from '@angular/router';
// import { getAuth, onAuthStateChanged } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor( private auth: Auth) { }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout(){
    return signOut(this.auth)
  }
}


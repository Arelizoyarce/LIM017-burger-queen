import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, updateProfile, getAuth } from '@angular/fire/auth';
// import { getAuth, onAuthStateChanged } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  const  = getAuth()
  constructor( private auth: Auth) { }
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  update( role : string){
    console.log(this.auth)
    return updateProfile(this.auth.currentUser, {displayName: role})
    .then((e)=>{
      console.log(e)
    })
  }
}


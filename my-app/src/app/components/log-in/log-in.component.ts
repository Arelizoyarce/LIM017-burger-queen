import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import{FirebaseService} from '../../services/services-firebase/firebase.service'
import{FirestoreService} from '../../services/services-firestore/firestore.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  dataUser:FormGroup;
  constructor( private formBuil : FormBuilder ,
    private fireValid : FirebaseService,
    private newRoute: Router,
    private firestore: FirestoreService,
    private snackBar: MatSnackBar) {
    this.dataUser = this.formBuil.group({
      email: ['', Validators.required, Validators.email],
      password : ['', Validators.required],
      role : ['' , Validators.required]
    })
  }

  submit(){
    this.fireValid.login(this.dataUser.value.email, this.dataUser.value.password)
    .then((data)=>{
      console.log(data)
      if(this.dataUser.value.role === 'chef'){
            this.firestore.getUserData(data.user.uid, 'chefs')
            .then((docResult)=>{
              if( docResult === undefined){
                this.errRol()
              } else if(docResult['role'] === this.dataUser.value.role){
                  this.newRoute.navigate(['/chef-view'])
              }
            })
     }
      if(this.dataUser.value.role === 'waiter'){
        this.firestore.getUserData(data.user.uid, 'waiters')
        .then((docResult)=>{
          if(docResult === undefined){
            this.errRol()
          } else if(docResult['role'] === this.dataUser.value.role){
              this.newRoute.navigate(['/take-orders'])
          }
        })
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  errRol(){
    this.snackBar.open('Rol incorrecto. Seleccione su rol nuevamente', 'Aceptar',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    } )
  }

  // errFirebase(err : string){
  //   if(err ==='FirebaseError: Firebase: Error (auth/invalid-email).'){
  //     this.snackBar.open('Email incorrecto. Ingrese nuevamente su email', 'Aceptar', {
  //         duration: 3000,
  //         horizontalPosition: 'center',
  //         verticalPosition: 'top'
  //       } )
  //   }
    // switch(err){
    //   case 'Firebase: Error (auth/user-not-found).':
    //     this.snackBar.open('Email incorrecto. Ingrese nuevamente su email', 'Aceptar', {
    //       duration: 3000,
    //       horizontalPosition: 'center',
    //       verticalPosition: 'top'
    //     } )
    // break;

  ngOnInit(): void {
  }
}

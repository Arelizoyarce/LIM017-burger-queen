import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import{FirebaseService} from '../../services-firebase/firebase.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  dataUser:FormGroup;
  constructor( private formBuil : FormBuilder , private fireValid : FirebaseService) {
    this.dataUser = this.formBuil.group({
      email: ['', Validators.required],
      password : ['', Validators.required]
    })
    console.log(this.dataUser)
  }
  submitDataUser(){
    const emailUser = this.dataUser.value.email
    const passwordUser = this.dataUser.value.password
    const valid = this.fireValid.login(emailUser, passwordUser)
    valid.then((data)=> {
      const emailValid = `${data.user.email}`
      if(emailValid.indexOf('m') === 0){
        console.log('HOLA SOY MESERA')
      }
    })
    .catch((err)=> console.log(err))
    this.dataUser.reset()
  }
  
  
  ngOnInit(): void {
  }
}

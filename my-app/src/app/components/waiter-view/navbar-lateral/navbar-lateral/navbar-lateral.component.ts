import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBurger, faChampagneGlasses, faCoffee, faRightFromBracket, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FirebaseService } from 'src/app/services/services-firebase/firebase.service';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.css']
})
export class NavbarLateralComponent implements OnInit {
  faUtensils = faUtensils;
  faCoffee = faCoffee;
  faBurger = faBurger;
  faChampagneGlasses = faChampagneGlasses;
  faRightFromBracket = faRightFromBracket;
  @Output() filter =  new EventEmitter<string>()


  constructor(private firestore: FirestoreService,
    private firebase: FirebaseService,
    private router: Router) { }

  ngOnInit(): void {
  }
  filterEventSend(type:string){
    this.filter.emit(type)
  }
  logOut(){
    this.firebase.logout()
    .then(()=>{
      this.router.navigate(['/log-in'])
    })
  }

}

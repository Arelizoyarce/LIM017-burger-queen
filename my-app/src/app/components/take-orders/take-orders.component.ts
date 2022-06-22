import { Component, OnInit } from '@angular/core';
import {faUtensils, faCoffee, faBurger, faChampagneGlasses, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';

@Component({
  selector: 'app-take-orders',
  templateUrl: './take-orders.component.html',
  styleUrls: ['./take-orders.component.css']
})
export class TakeOrdersComponent implements OnInit {
  faUtensils = faUtensils;
  faCoffee = faCoffee;
  faBurger = faBurger;
  faChampagneGlasses = faChampagneGlasses;
  faRightFromBracket = faRightFromBracket;
  constructor( private firestore: FirestoreService) { }
  // getProducts(){
  //   console.log(this.firestore.getDataProducts())
  // }
  ngOnInit(): void {
  }
 
}

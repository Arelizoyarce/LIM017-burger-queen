import { Component, OnInit } from '@angular/core';
import { faBurger, faChampagneGlasses, faCoffee, faRightFromBracket, faUtensils } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private firestore: FirestoreService) { }

  breakfast : boolean = false

  // filterProducts(){
  //   this.breakfast = true
  // }

  ngOnInit(): void {
  }

}

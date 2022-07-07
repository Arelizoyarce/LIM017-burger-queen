import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/services-firebase/firebase.service'
import { faUtensils, faClock, faCalendarCheck, faRightFromBracket, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-chef',
  templateUrl: './navbar-chef.component.html',
  styleUrls: ['./navbar-chef.component.css']
})
export class NavbarChefComponent implements OnInit {
  faUtensils = faUtensils;
  faClock = faClock;
  faCalendarCheck = faCalendarCheck;
  faRightFromBracket = faRightFromBracket;

  selectFilter: string ='All'
  @Output() filterValue: string;

  constructor(
    private firebase: FirebaseService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.firebase.logout()
    .then(()=>{
      this.router.navigate(['/log-in'])
    })
  }

  selectedFilter(faIcon: IconDefinition){
    if(faIcon===faUtensils){
      this.selectFilter= 'All'
    }else if (faIcon===faClock){
      this.selectFilter = 'Pending'
    } else if(faIcon===faCalendarCheck){
      this.selectFilter = 'Done'
    }
  }
}

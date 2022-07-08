import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() filter= new EventEmitter<string>()

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

  selectedFilter(type: string){
    this.filter.emit(type)
    if(type==='All'){
      this.selectFilter= type
    }else if (type==='Pending'){
      this.selectFilter = type
    } else if(type === 'Done'){
      this.selectFilter = type
    }
  }
}

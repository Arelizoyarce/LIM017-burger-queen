import { Component, Input, OnInit } from '@angular/core';
import { faCircleMinus, faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  faTrashCan = faTrashCan;
  faCirclePlus = faCirclePlus;
  faCircleMinus = faCircleMinus;
  
  @Input() product : any[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
  }

}

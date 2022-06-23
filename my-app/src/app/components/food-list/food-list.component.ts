import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getDownloadURL } from '@angular/fire/storage';
import { FirestoreService } from 'src/app/services/services-firestore/firestore.service';
import {ServicesStorageService } from 'src/app/services/services-storage/services-storage.service'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
menu: any[] = [];
images: string[];

  constructor(
    private firestore : FirestoreService,
    private storage : ServicesStorageService
  ) { }
  ngOnInit(): void {
    console.log('im here')
    this.printData()
    this.printImg()
  }
  printData(){
    this.firestore.getDataProducts()
    .subscribe((menu)=>{
      this.menu = [];
      menu.forEach(e =>{
        this.menu.push({
          name: e['name'],
          price: e['price']
        })
      })
    })
  }
printImg(){
this.storage.getImages()
.then(async (response)=>{
  this.images = [];
  for (let item of response.items){
    const urlImg = await getDownloadURL(item);
    this.images.push(urlImg)
    console.log(urlImg)
}})}

}

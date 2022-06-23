import { Component, OnInit } from '@angular/core';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';
//import { FirestoreService } from '../../services/services-firestore/firestore.service'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  images: string[];
  constructor(
    private storage : Storage,
    // private firestore: FirestoreService,
    ) {
      this.images = [];
    }
    ngOnInit(): void {
      this.getImages()
    }
  getImages(){
    const imagesRef = ref(this.storage, 'cafeAmericano.jpg');
    listAll(imagesRef)
    .then(async response => {
      console.log(response)
      this.images = [];
      for (let item of response.items){
        const urlImg = await getDownloadURL(item);
        this.images.push(urlImg);
      }
    })
    .catch(err =>{
    console.log(err)  
    })
  }
}

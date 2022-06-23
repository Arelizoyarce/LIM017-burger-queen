import { Injectable } from '@angular/core';
import { Storage, ref, listAll, getDownloadURL, ListResult } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesStorageService {

  constructor(private storage : Storage) { }

  getImages(): Promise<ListResult> {
    return listAll(ref(this.storage, 'images'));
  }
}

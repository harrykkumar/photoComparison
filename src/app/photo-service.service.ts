import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {
 private  getitem = new Subject()
  constructor(private http :HttpClient) { }
  getPhotos() {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`).
        pipe(
           map(data => {
             return data;
           })
        )
    }
    sendItem(value){
      this.getitem.next(value)
    }
    getItem (){
     return  this.getitem.asObservable()
    }
}

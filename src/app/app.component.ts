import { Component } from '@angular/core';
import { PhotoServiceService} from './photo-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'photoComparison';
  allPhotoList:any=[]
  Selectedlist:any=[]
  constructor(private _photoService : PhotoServiceService){
    this._photoService.getPhotos().subscribe(data=>{
      this.allPhotoList = data
      console.log(data)
    })
  }
  comparePhoto(val,index){
     this._photoService.sendItem(val)
  }
}

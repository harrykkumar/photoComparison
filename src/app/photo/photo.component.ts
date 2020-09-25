import { Component, OnInit } from '@angular/core';
import { PhotoServiceService} from '../photo-service.service'
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  Selectedlist:any=[]
  constructor( private service : PhotoServiceService) { 
    this.service.getItem().subscribe(data=>{
      this.Selectedlist.push(data);
    })
  }

  ngOnInit(): void {
    this.Selectedlist=[]
  }
 
  
}

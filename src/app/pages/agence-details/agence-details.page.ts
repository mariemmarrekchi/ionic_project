import { Component, OnInit, ViewChild } from '@angular/core';
import { AgenceService } from 'src/app/services/agence.service';
declare var map:Function;
declare var google:any;
@Component({
  selector: 'app-agence-details',
  templateUrl: './agence-details.page.html',
  styleUrls: ['./agence-details.page.scss'],
})
export class AgenceDetailsPage implements OnInit {
private nomAgence:String =''
private dataMap:any;
private map:any;

private marker:any;
  constructor(private serviceAgence:AgenceService) { }

  ngOnInit() {
   
  }

   initMap(): void {

  }

  detailAgence(){
    this.serviceAgence.detailAgence(this.nomAgence).subscribe(data=>{
this.dataMap=data;
console.log(this.dataMap.longitude+" "+this.dataMap.latitude);
map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  center: { lat: +data.latitude, lng: +data.longitude   },
  zoom: 13,
},
);
new google.maps.Marker({
  position: { lat: +data.latitude, lng: +data.longitude   },
  map,
  title: "Hello World!",
});
//map([this.dataMap.longitude,this.dataMap.latitude])

    },
    error=>{
      console.log(error);
   
    });
  }
  
  
   
    

}

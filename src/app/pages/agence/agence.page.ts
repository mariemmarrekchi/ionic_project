import { Component, OnInit } from '@angular/core';

import { AgenceService } from 'src/app/services/agence.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.page.html',
  styleUrls: ['./agence.page.scss'],
})
export class AgencePage implements OnInit {
private list:any;
  constructor(private agenceService:AgenceService ) { }

  ngOnInit() {
    this.listAgence();
  }
listAgence(){
  this.agenceService.listeAgence().subscribe( data=>{
this.list=data;
console.log(JSON.stringify(this.list));
},

error=>{
  console.log(error);
}
)
}
doRefresh(event){

  setTimeout(() => {
    console.log('Async operation has ended');
    this.listAgence();
    event.target.complete();
  }, 2000);
  
}
}

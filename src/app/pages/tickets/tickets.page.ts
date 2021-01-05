import { Component, OnInit } from '@angular/core';

import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {
private nomAgence:string='';
private info:any;
  constructor(private serviceTicket:TicketService) { }

  ngOnInit() {
  }
  reservationTicket(){
    this.serviceTicket.reservationTicket(this.nomAgence).subscribe(data=>{
this.info=data;
console.log(this.info);
    },
    
    error=>{
      console.log(error);
    })
  }

}

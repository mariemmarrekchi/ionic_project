import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

 public  reservationTicket(nomAgence:any):Observable<any> {
return  this.http.get('https://isetsfaxdsi3.000webhostapp.com/TicketEnLigne/getTicket.php?nom='+nomAgence);
  }
}

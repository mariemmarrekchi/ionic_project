import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
private url:string='https://isetsfaxdsi3.000webhostapp.com/TicketEnLigne/getAgences.php'
  constructor(private http:HttpClient) { }
  
  public listeAgence():Observable<any>{
    return this.http.get(this.url);
  }
  public detailAgence(nomAgence):Observable<any>{
return this.http.get('https://isetsfaxdsi3.000webhostapp.com/TicketEnLigne/getAgenceByNom.php?nom='+nomAgence);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private connecte = 'non';

  constructor(private http:HttpClient) { }

  public creerNouvelUtilisateur(name: string, prenom: string, login: string, password: string) {
   
    return this.http.get('https://isetsfaxdsi3.000webhostapp.com/TicketEnLigne/addUser.php?nom='+name+'&prenom=0'+prenom+'&login='+login+'&pass='+password);
   
  }
public connecter(login: string, password: string) {
  return this.http.get('https://isetsfaxdsi3.000webhostapp.com/TicketEnLigne/login.php?login='+login+'&pass='+password);
}

deconnecter(){
  localStorage.setItem(this.connecte, 'non');
  console.log('déconnecter')
}
public getConnecte(){
  return localStorage.getItem(this.connecte);
 }

 


}

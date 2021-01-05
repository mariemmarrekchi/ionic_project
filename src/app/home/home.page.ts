import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
private getId:any;
  constructor(private service:InscriptionService,private router:Router) {

   
  }
  Deconnecter() {
    this.service.deconnecter();
    this.router.navigateByUrl('/authentification');
   }
   
}

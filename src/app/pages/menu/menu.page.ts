import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { InscriptionService } from 'src/app/services/inscription.service';
import { InspectOptions } from 'util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public pages = [
    {titre: 'Accueil', chemin: '/menu/home', icone: 'home-outline'},
    {titre: 'Liste Agence', chemin: '/menu/agence', icone: 'newspaper-outline'},
    {titre: 'tickets', chemin: '/menu/tickets', icone: 'receipt-outline'},
    {titre: 'agence détail', chemin: '/menu/agence-details', icone: 'navigate-outline'},
    {titre: 'Déconnection', chemin: '/authentification', icone: 'close'},
   ];
   
  constructor(private menu: MenuController,private service:InscriptionService,private router:Router) { }

  ngOnInit() {
  }
  onMenuItem(p) {
    if (p.chemin === 'deconnexion') {
    this.service.deconnecter();
    this.router.navigateByUrl('/authentification');
    } else {
    this.router.navigateByUrl(p.chemin);
    }
   }
}

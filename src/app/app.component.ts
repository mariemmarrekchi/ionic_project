import { Component, Renderer2 } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { InscriptionService } from './services/inscription.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router :Router,
    private service:InscriptionService,private render:Renderer2
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigateByUrl('/authentification');
      this.login();
    });
  }

  changeThemeToDark(event){
    console.log(event.detail.checked);
    if(event.detail.checked){
      this.render.setAttribute(document.body,'color-theme','dark');
    }else{
      this.render.setAttribute(document.body,'color-theme','light');
    }
  }

  login() {
    if (this.service.getConnecte() !== 'oui') {
    this.router.navigateByUrl('/authentification');
    
    } else {
    this.router.navigateByUrl('menu/home');
    }
   }
   
}

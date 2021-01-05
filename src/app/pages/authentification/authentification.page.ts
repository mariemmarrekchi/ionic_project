import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
private connecte='non';

fieldTextType: boolean;
  constructor(private router:Router,private service:InscriptionService,private alert:AlertController,private toast:ToastController) { }

  ngOnInit() {
    // if(this.connecte=="oui"){
    //   this.router.navigateByUrl('/inscription')
    // }
  }

  register(){
    this.router.navigateByUrl('/inscription');
  }
  async onLogin(value:any){
    if(value.login!==''&&value.password!==''){
      this.service.connecter(value.login,value.password).subscribe( async data =>{
        
        if(data ==true){
          localStorage.setItem(this.connecte, 'oui');
          console.log('oui');
          console.log(data);
          this.router.navigateByUrl('/menu/home');
        }
        else{
          console.log('false');
          localStorage.setItem(this.connecte, 'non');
          //this.router.navigateByUrl('/inscription');
          const toast = await this.toast.create({
            color: 'dark',
            duration: 2000,
            message: 'Vérifier votre id et mot de passe'
            });
            await toast.present();
           
        }
      }, 
      error => {
        console.log("error");
      });
    }else{

      const toast = await this.alert.create({
           
        header:"Opss!",
         message: 'remplir les champs ',
         buttons: ['Ok']
         });
         await toast.present();
         
     }
    

  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

private connecte = 'non';
private dataForm:any;
  constructor(private router:Router,private service:InscriptionService,private alert:AlertController) { }

  ngOnInit() {
  }

onGoLogin(){
this.router.navigateByUrl('/authentification')
}
async onCreerUtilisateur(value:any){
  if(value.nom!==''&&value.prenom!==''&&value.login!=''&&value.password!==''){
  this.service.creerNouvelUtilisateur(value.nom,value.prenom,value.login,value.password).subscribe(data =>{
    this.dataForm=data;
    if(this.dataForm ==true){
      localStorage.setItem(this.connecte, 'oui');
      console.log('oui');
      console.log(this.dataForm);
      this.router.navigateByUrl('/menu/home');
    }
    else{
      console.log('false');
      localStorage.setItem(this.connecte, 'non');
      this.router.navigateByUrl('/inscription');
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

}




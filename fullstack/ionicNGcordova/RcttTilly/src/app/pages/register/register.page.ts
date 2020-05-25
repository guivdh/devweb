import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";

import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'

import { Router } from '@angular/router'
import { map } from 'rxjs/operators';

import { UserService } from '../../services/user/user.service'
import { AngularFirestore } from '@angular/fire/firestore'
import { AlertController } from '@ionic/angular';

import {Location} from '@angular/common';
import { ApiService } from 'src/app/services/api/api.service';
import { MailRecoService } from 'src/app/services/mail-reco.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  mail:string="";
  firstname: string="";
  estResponsable: boolean= false;
  matricule: number = 0;
  name: string="";
  password:string="";
  info:string;
  errorToggle=false;

  public registerForm: FormGroup;
  noWayToConnect: boolean=false;

  constructor(
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth, 
    public router: Router,
    public afStore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    private _location: Location,
    private reco: MailRecoService

    ) 
    { 
    this.registerForm = this.formBuilder.group({
      NomFc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z- ]+$')
      ])),
      PrenomFc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z- ]+$')
      ])),
      MatriculeFc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.maxLength(6),
        Validators.minLength(6)
      ])),
      passwordFc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-_@#$%^&*])[a-zA-Z0-9!-_@#$%^&*]+$'),
        Validators.minLength(8)
      ])),
      mailFc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      confirmpasswordFc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-_@#$%^&*])[a-zA-Z0-9!-_@#$%^&*]+$'),
        Validators.minLength(8)
      ])),
    },
    {
      validators: this.passwordFc.bind(this)
    });


  }


  ngOnInit(): void {
  }

  passwordFc(formGroup: FormGroup) {
    const { value: password } = formGroup.get('passwordFc');
    const { value: confirmPassword } = formGroup.get('confirmpasswordFc');


    if(password !== confirmPassword  && confirmPassword.length > 7 ){

      this.info="Échec de la vérification de mot de passe !"
    }

    else if(password === confirmPassword  && confirmPassword.length > 7 ){

      this.info=""
    }


    return password === confirmPassword ? null : { 
      passwordNotMatch: true 
  };

  }



  async presentAlert(title: string, content:string){

    const alert= await this.alertController.create({

      header: title,
      message: content,
      buttons: ["OK"]

    })

    await alert.present();
  }

  backClicked() {
    this._location.back();
  }
  async register(){

    if (this.registerForm.valid){

   var mail = this.registerForm.value.mailFc;
    var firstname = this.registerForm.value.PrenomFc;
    var estResponsable = false;
    var matricule = this.registerForm.value.MatriculeFc;
    var name = this.registerForm.value.NomFc;
    var password = this.registerForm.value.passwordFc;
  
  
    /* const{
      mail=,
      password=,
      name =,
      firstname =this.registerForm.value.PrenomFc,
      matricule =this.registerForm.value.MatriculeFc,

    }=this */
    try{
      
      if(mail.includes(this.reco.getMailReco()[0].type)){

     

      const res = await this.afAuth.auth.createUserWithEmailAndPassword(mail, password);
      //console.log(res);

      this.afStore.doc(`users/${res.user.uid}`).set({

        AdresseMail: mail,
        Firstname: firstname,
        Name: name,
        Matricule: matricule,
      }).catch( (error) =>  {

        console.log(error.code);
        console.log(error);

        alert("Vous n'êtes pas membre du club !")

        this.router.navigate(['/home']);


        if(error.code=="permission-denied"){

          alert("Vous n'êtes pas membre du club !")

          this.router.navigate(['/home']);

          this.errorToggle=true;
          console.log(this.errorToggle);

        }        
      });

      if(this.errorToggle === false) {
        console.log(this.errorToggle);

        this.user.setUser({
          mail,
          uid: res.user.uid
        })
  
        this.presentAlert("Succès","Vous êtes enregistré!<br>Votre rôle dans le club ainsi que votre numéro de téléphone sont à compléter dans votre profil.");
        this.router.navigate(['/connection']);
  
      }
      
    }  
  
  else{
    this.noWayToConnect=true;

}
  
  }
    
    catch(err){
      console.dir(err);

      if(err.code === "auth/email-already-in-use"){
        console.log("Utilisateur déjà existant");
        this.info="Utilisateur déjà existant";
      }
      else if(err.code === "auth/invalid-email"){
        console.log("Adresse mail invalide");
        this.info="Adresse mail invalide";

      }
      else if (err.code === "auth/weak-password"){
        console.log("Mot de passe invalide");
        this.info="Mot de passe invalide, il doit contenir au moins 1 majuscule et un chiffre et faire au moins 8 caractères";

      }

      else{
        console.log("Pas de connexion internet!");
        this.info="Pas de connexion internet!";
      }




    }
    
    }
        else{
      alert("Vérifiez la validité des données insérées!" );

      }


      if(this.noWayToConnect){

        this.router.navigate(['/error-member']);


      }

    }



  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    this.router.navigate(['/verify-email']);
  }


}

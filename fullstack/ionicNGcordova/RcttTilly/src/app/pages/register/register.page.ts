import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";

import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'

import { Router } from '@angular/router'

import { UserService } from '../../services/user/user.service'
import { AngularFirestore } from '@angular/fire/firestore'
import { AlertController } from '@ionic/angular';

import {Location} from '@angular/common';

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


  public registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth, 
    public router: Router,
    public afStore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    private _location: Location,

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

  onClickSubmit() {
    console.log('Start login with: ' 
                + this.registerForm.value.mailFc + ':' 
                + this.registerForm.value.passwordFc);
  }

  ngOnInit(): void {
  }

  passwordFc(formGroup: FormGroup) {
    const { value: password } = formGroup.get('passwordFc');
    const { value: confirmPassword } = formGroup.get('confirmpasswordFc');
    return password === confirmPassword ? null : { passwordNotMatch: true };
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
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(mail, password);
      console.log(res);

      this.afStore.doc(`users/${res.user.uid}`).set({

        AdresseMail: mail,
        Firstname: firstname,
        Name: name,
        Matricule: matricule,
        Password: password,
      })

      this.user.setUser({
        mail,
        uid: res.user.uid
      })

      this.presentAlert("Succès","Vous êtes enregistré");
      this.router.navigate(['/connection']);

    } catch(err){
      console.dir(err);

      if(err.code === "auth/email-already-in-use"){
        console.log("Utilisateur introuvable");
        this.info="Utilisateur introuvable";
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

}

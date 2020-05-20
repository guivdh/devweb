import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'

import { Router } from '@angular/router'
import { UserService } from '../../services/user/user.service'
import {Location} from '@angular/common';



@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {

  mail:string="";
  password:string="";
  info:string;

  public connectForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder, 
    public afAuth: AngularFireAuth,
    public router: Router,
    public user: UserService,
    private _location: Location,
    ) { 


    this.connectForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.minLength(8)
      ])),
      mail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  }

  onClickSubmit() {
    console.log('Start login with: ' 
                + this.connectForm.value.mail + ':' 
                + this.connectForm.value.password);
  }

  ngOnInit(): void {
  }


  backClicked() {
    this._location.back();
  }

  async connect(){
    const{mail=this.connectForm.value.mail,password=this.connectForm.value.password}=this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(this.connectForm.value.mail, this.connectForm.value.password);
      
      if(res.user){
        //alert(res.user.uid);
        this.user.getUID();

        this.user.setUser({
          mail,
          uid: res.user.uid,
        });
  
        this.router.navigate(['/tabs']);
      }
      //alert(" user: "+res.user.uid+" mail: "+res.user.email);

    } catch(err){
      console.dir(err);
      console.log(err.code)
      

      if(err.code === "auth/user-not-found"){
        console.log("Utilisateur introuvable");
        this.info="Utilisateur introuvable";
      }
      else if(err.code === "auth/invalid-email"){
        console.log("Adresse mail invalide");
        this.info="Adresse mail invalide";

      }
      else if (err.code === "auth/wrong-password"){
        console.log("Mot de passe invalide");
        this.info="Mot de passe invalide";

      }

      else{
        console.log("Pas de connexion internet!");
        this.info="Pas de connexion internet!";
      }
      

      
    }
  }
}

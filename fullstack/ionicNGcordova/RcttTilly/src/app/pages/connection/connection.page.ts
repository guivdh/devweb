import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'

import { Router } from '@angular/router'
import { UserService } from '../../user.service'

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {

  mail:string="";
  password:string="";
  public connectForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public afAuth: AngularFireAuth, public router: Router,public user: UserService) { 


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



  async connect(){
    const{mail=this.connectForm.value.mail,password=this.connectForm.value.password}=this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(this.connectForm.value.mail, this.connectForm.value.password);
      
      if(res.user){
        this.user.setUser({
          mail,
          uid: res.user.uid
        })
        this.router.navigate(['/tabs']);
      }
      console.log(res);

    } catch(err){
      console.dir(err);
      if(err.code === "auth/user-not-found"){
        console.log("User not found");
      }
    }
  }
}

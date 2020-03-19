import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";

import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'

import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  public registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder,public afAuth: AngularFireAuth, public router: Router) { 
    this.registerForm = this.formBuilder.group({
      Nom: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z- ]+$')
      ])),
      Prenom: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z- ]+$')
      ])),
      Matricule: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.maxLength(6),
        Validators.minLength(6)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-_@#$%^&*])[a-zA-Z0-9!-_@#$%^&*]+$'),
        Validators.minLength(8)
      ])),
      mail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-_@#$%^&*])[a-zA-Z0-9!-_@#$%^&*]+$'),
        Validators.minLength(8)
      ])),
    },
    {
      validators: this.password.bind(this)
    });
  }

  onClickSubmit() {
    console.log('Start login with: ' 
                + this.registerForm.value.mail + ':' 
                + this.registerForm.value.password);
  }

  ngOnInit(): void {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }


  async register(){

    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.value.mail, this.registerForm.value.password);
      console.log(res);
      this.router.navigate(['/connection']);
    } catch(err){
      console.dir(err);
    }
  }

}

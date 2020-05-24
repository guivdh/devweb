import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public connectForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public afAuth: AngularFireAuth,
    private _location: Location,

    ) { 
    this.connectForm = this.formBuilder.group({
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
  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  /** 
   * Initiate the password reset process for this user 
   * @param email email of the user 
   */ 
  resetPasswordInit() { 
    return this.afAuth.auth.sendPasswordResetEmail(
      this.connectForm.value.mail).then(()=>{
        alert(`Vous pouvez maintenant réinitialiser votre mot de passe en allant sur le lien du mail qui vient de vous être envoyé!`);
        this.router.navigate(['/connection']);
      }); 
    } 
}

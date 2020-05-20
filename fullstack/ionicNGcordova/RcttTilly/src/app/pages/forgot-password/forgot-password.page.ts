import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public connectForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    
    public afAuth: AngularFireAuth,
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



  /** 
   * Initiate the password reset process for this user 
   * @param email email of the user 
   */ 
  resetPasswordInit() { 
    return this.afAuth.auth.sendPasswordResetEmail(
      this.connectForm.value.mail, 
      { url: 'http://localhost:4200/auth' }); 
    } 
}

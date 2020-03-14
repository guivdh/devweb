import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  public registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { 
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
                + this.registerForm.value.mail + ':' 
                + this.registerForm.value.password);
  }

  ngOnInit(): void {
  }

}

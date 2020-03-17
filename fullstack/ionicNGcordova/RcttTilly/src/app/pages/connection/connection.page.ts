import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {

 
  public connectForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { 
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
}

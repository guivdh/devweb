
import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router'
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';

import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { EventAutoCompletionService, Role } from 'src/app/services/autoCompletion/event-auto-completion.service';

import { map } from 'rxjs/operators';

import { ApiService, Responsible } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.page.html',
  styleUrls: ['./user-profil.page.scss'],
})
export class UserProfilPage implements OnInit {


  docRef: any;
  responsibleProfil={
    Role:'', 
    Num:'', 
    Firstname:'', 
    Name:'',
    id:''
  };

  public rolesName= this.getRoles();
  public modifyProfilForm: FormGroup;
  keyword = 'name';
  userObjRcv; 
  stringToObj: any;




  constructor(
    //public network: Network,
    public alertController: AlertController,
    private _location: Location,
    private db: AngularFirestore,
    public activateRoute:  ActivatedRoute,
    private router: Router,
    public api: ApiService,
    public user: UserService,
    private RoleData: EventAutoCompletionService,
    public formBuilder: FormBuilder,

    ) 
  {

     this.getUserInformation()


      this.modifyProfilForm = this.formBuilder.group({
        roleFc: new FormControl( this.responsibleProfil.Role, Validators.compose([
          Validators.required,

        ])),
      },
      {
        validators: this.roleFc.bind(this)
      });


      this.modifyProfilForm.setValue({roleFc: this.stringToObj.Role});

  }

  async ngOnInit() {
  }

  roleFc(formGroup: FormGroup) {
    const { value: role } = formGroup.get('roleFc');

    return role !==  this.stringToObj.Role ? null : { 
      passwordNotMatch: true 
  };

  }
  getUserInformation() {


    this.userObjRcv = this.activateRoute.snapshot.paramMap.get('userObj');

    this.stringToObj=JSON.parse(this.userObjRcv);


    this.responsibleProfil.Num= this.stringToObj.Num;

    this.responsibleProfil.Role = this.stringToObj.Role;
    this.responsibleProfil.Firstname = this.stringToObj.Firstname;
    this.responsibleProfil.Name = this.stringToObj.Name;

    this.responsibleProfil.id = this.stringToObj.id
  }

 

 updateDetails() {

    this.responsibleProfil.Role=this.modifyProfilForm.value.roleFc.name;
  

  this.api.updateResponsible(this.responsibleProfil.id, this.responsibleProfil);
  alert('Profil modifié !');

    this.backClicked();
}
  
getRoles(): Role[] {
  return this.RoleData.getRole();  
}
selectEvent(item) {
  this.responsibleProfil.Role=item.name;
  this.modifyProfilForm.value.roleFc=item.name;


}

onChangeSearch(search: string) {
  // fetch remote data from here
  // And reassign the 'data' which is binded to 'data' property.
}

onFocused(e) {
  // do something
}

  backClicked() {
    this._location.back();
  }

  showHideProfil() {
    this.backClicked();
    }
}

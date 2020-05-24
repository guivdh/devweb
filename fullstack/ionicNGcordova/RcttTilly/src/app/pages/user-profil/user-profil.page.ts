
import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router'
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';

import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


import { map } from 'rxjs/operators';

import { ApiService, Responsible } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.page.html',
  styleUrls: ['./user-profil.page.scss'],
})
export class UserProfilPage implements OnInit {


  uid: any;
  docRef: any;
  responsibleProfil;
  
  constructor(
    //public network: Network,
    public alertController: AlertController,
    private _location: Location,
    private db: AngularFirestore,
    public activateRoute:  ActivatedRoute,
    private router: Router,
    public api: ApiService,
    public user: UserService) 
  {

    this.getCurrentUserInformation();


  }

  async ngOnInit() {
    this.uid=await this.user.getUID()

  }


  async getUserDocRef(): Promise<AngularFirestoreCollection<Responsible>>{
    
    this.uid = await this.user.getUID();
    
    console.log(this.uid)

    this.docRef= await this.api.getResponsibleById(this.uid);
    console.log(this.docRef)

    return this.docRef;
  }


 async getCurrentUserInformation(){
    await this.getUserDocRef();

    await this.docRef.ref.get().then(doc => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            this.responsibleProfil= doc.data();
            console.log(this.responsibleProfil)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

 }
 
 updateDetails() {


    this.api.updateResponsible(this.uid, this.responsibleProfil);

-  console.log(this.responsibleProfil);
  
    alert('Profil modifié !');
  

    this.backClicked();
}
  


  backClicked() {
    this._location.back();
  }

  showHideProfil() {
    this.backClicked();
    }
}

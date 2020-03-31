import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import {AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-journal',
  templateUrl: 'journal.page.html',
  styleUrls: ['journal.page.scss']
})
export class journalPage {

  constructor(public afDB: AngularFireDatabase, public db: AngularFirestore) {
  }


  add() {
    this.afDB.list('Users/').push({
      AdresseMail: 'eric.laboule@hotmail.com',
      FirstName:'Eric',
      Name: 'La Boule',
      IsResponsible: 'true',
      Matricule: '999999',
      Password: 'Azerty1234'
    });
  }

  SendRepPos(){
    this.db.collection('presence').add({
      idEvent: '-M2xeQIYjoH3DRBz1z5w',
      matricule: '025520',
      response: 'True'
    });
  }

  SendRepNeg(){
    this.db.collection('presence').add({
      idEvent: '-M2xeQIYjoH3DRBz1z5w',
      matricule: '025520',
      response: 'False'
    });
}
}

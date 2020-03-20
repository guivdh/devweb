import { Component } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-journal',
  templateUrl: 'journal.page.html',
  styleUrls: ['journal.page.scss']
})
export class journalPage {

  constructor(
    public afDB: AngularFireDatabase
  ) {}


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
}

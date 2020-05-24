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

  hiddenTraining=false;
  hiddenMatch=false;

  goToMatch(){

    var url="https://resultats.aftt.be/?div_id=4406&menu=5&withres=1&week_name=22&divcat=0&club_id=0&club_id=1056"
    window.open(url, "_blank");

  }

  goToHours(target){

    if (target==="Match"){
      var url='https://resultats.aftt.be/?div_id=4141&menu=3&type=3&modif=&week_name=22&club_id=744&club_id=1056'
      window.open(url, "_blank");

  
    }
    else if (target === "MatchInfo"){
  
    alert("Voir horaire des matchs pour plus d'infos !")
    }

    else if (target === "Training"){
  
      alert("Pas d'entrainement pour l'instant !")
      }
    

  }

  catchNote(){

    alert("Pas de note à afficher pour l'instant !")
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
      response: true
    });
    this.hiddenTraining = true;
  }

  SendRepNeg(){
    this.db.collection('presence').add({
      idEvent: '-M2xeQIYjoH3DRBz1z5w',
      matricule: '025520',
      response: false
    });
    this.hiddenTraining = true;

}








}

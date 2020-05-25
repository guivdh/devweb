import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database'; 

@Injectable({
  providedIn: 'root'
})
export class MailRecoService {

  mailRecos;

  constructor(

    public afDB: AngularFireDatabase,

  ) { 

    this.mailRecognition();
  }




  mailRecognition() {
    this.afDB.list('MailCo').snapshotChanges(['child_added']).subscribe(actions => {
         this.mailRecos = [];
    
         actions.forEach(action => {
   
           //console.log('action: ' + action.payload.key);
   
           this.mailRecos.push({
             type: action.payload.exportVal().type,
           });
   
   
         });
       });
        
     }


     getMailReco(){
       return this.mailRecos;
     }
}

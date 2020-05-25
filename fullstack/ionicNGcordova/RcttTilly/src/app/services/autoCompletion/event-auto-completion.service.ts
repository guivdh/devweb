import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database'; 

export interface TitleType {
  id: number;
  name: string;
}
export interface Role {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventAutoCompletionService {

  eventTitle=[];
  roleUser=[];


  constructor(   
   public afDB: AngularFireDatabase,
    ) { 

    }
  





     
    public getEventTitles(): TitleType[] {
        this.eventTitle=[];
      this.afDB.list('Events').snapshotChanges(['child_added']).subscribe(actions => {
           actions.forEach(action => {
             //console.log('action: ' + action.payload.key);

             this.eventTitle.push({
               id: 1,
               name: action.payload.exportVal().title
             });
         
           });
           //console.log('sdsd: ' + this.eventTitle);

         });

         return this.eventTitle;
         //return this.titles;
       }



       public getRole(): Role[] {
        this.roleUser=[];
      this.afDB.list('Role').snapshotChanges(['child_added']).subscribe(actions => {
           actions.forEach(action => {
             //console.log('action: ' + action.payload.key);

             this.roleUser.push({
               id: 1,
               name: action.payload.exportVal().name
             });
         
           });

         });

         return this.roleUser;
       }
}

import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database'; 

export interface TitleType {
  id: number;
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class EventAutoCompletionService {

  eventTitle=[];


  public titles: TitleType[] = [
    {
      id: 1,
      name: 'Match - Division2A_N',
    },
    {
      id: 2,
      name: 'Match - Division1B_P',
    },
    {
      id: 3,
      name: 'Match - Division3C_P',
    },
    {
      id: 4,
      name: 'Match - Division3D_P',
    },
    {
      id: 5,
      name: 'Match - Division4E_P',
    },
    {
      id: 6,
      name: 'Match - Division5F_P',

    },
    {
      id: 7,
      name: 'Match - Division6G_P',
    },
    {
      id: 8,
      name: 'Match - Division7_debutant',
    },
    {
      id: 9,
      name: 'Entrainement libre',
    },
    {
      id: 10,
      name: 'Entrainement dirigé',
    },
    {
      id: 11,
      name: 'Souper du club',
    },
    {
      id: 12,
      name: 'Réunion - capitaine',
    },
    {
      id: 13,
      name: 'Réunion - responsable',
    }
  ];


  constructor(   
   public afDB: AngularFireDatabase,
    ) { 

    }
  

/*   public getEventTitles() {


    this.afDB.list('Event').snapshotChanges(['child_added']).subscribe(actions => {
         this.eventTitle = [];
    
         actions.forEach(action => {   
           this.eventTitle.push({
            _id:action.payload.key,
            title: action.payload.exportVal().title,
           });
         });
         return this.eventTitle;
       });    
     } */




     
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


}

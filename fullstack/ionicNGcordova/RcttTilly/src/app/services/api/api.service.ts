import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import 'firebase/firestore'; 
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';



export class Responsible {
  Firstname: string;
  Name: string;
  Num: number;
  Role:string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dbPath = 'users';

  responsiblesRef: AngularFirestoreCollection<Responsible> = null;

  public responsibles: Responsible[];



  constructor(   
    private afStr: AngularFirestore,
    private router: Router
     ) { 
      this.responsiblesRef = afStr.collection(this.dbPath);

     }


  public getResponsibleById(id): AngularFirestoreDocument<Responsible>{
    //alert("je suis "+id);
    
    return this.responsiblesRef.doc(id);

  }




  
  public getResponsibles(): AngularFirestoreCollection<Responsible> {

    return this.responsiblesRef;

   }

   public createResponsible(responsible: Responsible): void {
    this.responsiblesRef.add({...responsible});
  }

  updateResponsible(id: string, value: any): Promise<void> {
      
    return this.responsiblesRef.doc(id).update(value);

  }

  deleteResponsible(id: string){
    return this.responsiblesRef.doc(id).delete();

  }


}

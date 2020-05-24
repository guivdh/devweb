import { Component, OnInit } from '@angular/core';


import { ApiService, Responsible } from '../services/api/api.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-directory',
  templateUrl: 'directory.page.html',
  styleUrls: ['directory.page.scss']
})
export class directoryPage  {
 
  responsibles: any;
  constructor(
    private data: ApiService,
    private router: Router
    ) {

    this.getResponsibles();

  }

  ngOnInit(){

  }
  


  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }


  getResponsibles() {
    this.data.getResponsibles().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(responsibles => {
      this.responsibles = responsibles;

    });
  }


  showHideProfil() {
    this.router.navigate(['/user-profil']);
    }
}

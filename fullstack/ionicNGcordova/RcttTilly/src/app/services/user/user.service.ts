import { Injectable } from '@angular/core'
import {AngularFireAuth} from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';


interface user {

    mail: string,
    uid: string
}

@Injectable()
export class UserService{

    private user: user 
    constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore ){



    }


    setUser(user: user){

    this.user = user

    }


    getUID(){
        if(!this.user){

            if(this.afAuth.auth.currentUser)
            {
                const user = this.afAuth.auth.currentUser;
                this.setUser({
                    mail: user.email,
                    uid: user.uid
                });
                return user.uid;
            } 
            else{
                throw new Error("Utilisateur non connecté!")
            } 
        }   
        
        else{
            return this.user.uid;
        }
    }
}
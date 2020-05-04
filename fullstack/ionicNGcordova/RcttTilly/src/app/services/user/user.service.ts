import { Injectable } from '@angular/core'
import {AngularFireAuth} from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


interface user {

    mail: string,
    uid: string
}

@Injectable()
export class UserService{

    private user: user 
    constructor(
        private afAuth: AngularFireAuth,
        private firestore: AngularFirestore,
        private nativeStorage: NativeStorage,
        ){



    }


    setUser(user: user){

    this.user = user

    }

    save(name,item){
        this.nativeStorage.setItem(name, item)
        .then(
    () => console.log('Item enregistré!'),
    error => console.error(`Erreur d'enregistrement`, error)
    );
    return name
    }

    async retrieve(name){
        var useriD
        await this.nativeStorage.getItem(name)
        .then( (val)=>{
            // alert( JSON.stringify(val));
           // alert(val.id); 
            useriD=val.id;

        });
        return useriD

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

                this.save("userTilly",{ id: this.user.uid, mail: this.user.mail }).then(()=>{
                    alert(this.user.mail+" sauvé")
                });
                return user.uid;
            } 
            else{
                console.error
            } 

            return this.retrieve("userTilly");

        }   
        
        else{
            return this.user.uid;
        }
    }


    
}
import { Injectable } from '@angular/core'
import {AngularFireAuth} from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';


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
        public alertController: AlertController

        ){



    }


    setUser(user: user){

    this.user = user

    }

    async save(name,item){
        await this.nativeStorage.setItem(name, item)
        /* .then(
    () => alert('Item enregistré!'),
    error => console.error(`Erreur d'enregistrement`, error)
    ) */;
    return name
    }

    async retrieve(name){
        var useriD
        await this.nativeStorage.getItem(name)
        .then( (val)=>{
            /* alert( JSON.stringify(val));
            alert(val.id); */
            useriD=val.id;

        });
        return useriD

    }


    async getUID(){
        if(!this.user){

            if(this.afAuth.auth.currentUser)
            {
                const userAuth = this.afAuth.auth.currentUser;
                this.setUser({
                    mail: userAuth.email,
                    uid: userAuth.uid
                });
                await this.save("user",{ id: this.user.uid, mail: this.user.mail })/* .then(()=>{
                    alert(this.user.mail+" sauvé")
                }) */;
            
                return userAuth.uid;
            } 
            else{
                console.error
               alert("Utilisateur non connecté!");
            }
            
            return this.retrieve("userTilly");

        }   
        
        else if (this.user){

             if (this.user.uid!==undefined && this.user.uid!== " " && this.user.uid.length>20){
                return this.user.uid;

            } 
             else{
                 alert("Ich bin malade")
               return this.retrieve("user");
            }   
        }
    }
}
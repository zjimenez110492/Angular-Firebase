import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'
import {map} from 'rxjs/operators'
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* 
Aqui estará todo lo relacionado con login y registro de usuarios */
  constructor(private afsAuth: AngularFireAuth) { }
  registerUser(email:string, pass:string){
    return new Promise((resolve, reject)=>{
      this.afsAuth.createUserWithEmailAndPassword(email,pass).then(
        userData=>resolve(userData),
        err=>reject(err)
      );
    });
  }
  public loginEmailUser(email:string, pass:string){
    return new Promise((resolve, reject)=>{
      this.afsAuth.signInWithEmailAndPassword(email,pass).then(
        userData=>resolve(userData),
        err=>reject(err)
      );
    });
  }  

  public LoginGoogleUser(){
    return this.afsAuth.signInWithPopup(new auth.GoogleAuthProvider());   
  }
  LoginFacebbokUser(){
  //Se debe tener SSL para poder usar servidores de facebook
    return this.afsAuth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  LogoutUser(){
    this.afsAuth.signOut();
  }
  isAuth()
  {
    let autenticado=this.afsAuth.authState.pipe(map(auth=> auth));
    console.log("isAuth() return: "+autenticado);
    return autenticado;
  }
 

}

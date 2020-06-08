import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* 
Aqui estará todo lo relacionado con login y registro de usuarios */
  constructor(private afsAuth: AngularFireAuth) { }
  registerUser(){}
  loginEmailUser(){}
  LoginFacebbokUser(){}
  LoginGoogleUser(){}
  LogoutUser(){}
  isAuth()
  {
    return this.afsAuth.authState.pipe(map(auth=> auth));
  }

}

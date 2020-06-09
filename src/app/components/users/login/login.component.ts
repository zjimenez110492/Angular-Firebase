import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { firebase } from '@firebase/app';
import { AngularFireDatabase } from '@angular/fire/database/database';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { stringify } from 'querystring';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
correctLogin:boolean;
public email:string='';
public pass:string='';
  constructor(public afAuth: AngularFireAuth, private router:Router, private authService:AuthService) 
  {
    this.correctLogin=true;
  }

  ngOnInit() {
    this.afAuth.signOut();
  }
  onLogin():void
  {
    this.authService.loginEmailUser(this.email, this.pass).then(
      (res)=>{
        this.onLoginRedirect();
      }
    ).catch(err => console.log('err', err.message));
  }
    onLoginGoogle():void
    {
        this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
      //FORMA 1, HACIENDOLO EN ESTA MISMA CLASE
        this.authService.isAuth().subscribe(auth=>{
          if(auth){
            this.onLoginRedirect();
          }   
        });  
      //FORMA 2, HACIENDOLO DESDE EL SERVICIO
        /*   this.authService.LoginGoogleUser().then((res) =>{
            this.router.navigate(['admin/list-books']);
          }).catch(err=> console.log('Error',err)); */
    }
    onLoginFacebook()
    {
      this.afAuth.signInWithPopup(new auth.FacebookAuthProvider());
      this.authService.isAuth().subscribe(auth=>{
        if(auth){
          this.onLoginRedirect();
        }
        /* else{
        this.correctLogin=false;
        } */
      });
    }
    onLogout()
    {
      this.afAuth.signOut();
      this.router.navigate(['user/login']);
    }
    onLoginRedirect()
    {
      this.router.navigate(['admin/list-books']);
    }
}

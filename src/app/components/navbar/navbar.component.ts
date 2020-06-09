import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {AngularFireAuth} from '@angular/fire/auth'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public app_name:string="BookStore";
public isLogged:boolean=false;
  constructor(private authService:AuthService, private afsAuth:AngularFireAuth) { }
  

  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser()
  {
      this.authService.isAuth().subscribe(auth=>{
        if(auth){
          console.log("User logged");
          this.isLogged=true;
        }
        else{
          console.log("User NO logged");
          this.isLogged=false;
        }
      });
  }
  onLogout()
{
  this.authService.isAuth().subscribe(auth=>{
    if(auth){  
      console.log("");   
      this.afsAuth.signOut();
      this.isLogged=false;
    }
    else{
      console.log("NO SE PUEDE DES LOGEAR CUANDO NO HA INICIADO SESION");
    }
  });
}
}

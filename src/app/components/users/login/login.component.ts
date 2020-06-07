import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { firebase } from '@firebase/app';
import { AngularFireDatabase } from '@angular/fire/database/database';
import { auth } from 'firebase';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router:Router) { }

  ngOnInit() {
  }
onLoginGoogle()
{
  this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  this.router.navigate(['admin/list-books']);
}
onLogout()
{
  this.afAuth.signOut();
  this.router.navigate(['']);
}
}

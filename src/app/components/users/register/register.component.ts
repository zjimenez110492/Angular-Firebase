import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email:string="";
  public pass:string="";
  constructor(private authService:AuthService, private router:Router, private storage:AngularFireStorage) { }

  ngOnInit() {
  }
  onAddUser()
  {
    this.authService.registerUser(this.email, this.pass).then(
      (res)=>{
        this.onLoginRedirect();
      }
    ).catch(err => console.log('err', err.message));
  }
  onUpload(event)
  {
    const id= Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath= `uploads/profile_${id}`
    const ref= this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
  }
   onLoginGoogle():void
    {
        this.authService.LoginGoogleUser().then(
          (res)=>{
            this.onLoginRedirect();
          }
        ).catch(err => console.log('err',err.message));
    }
    onLoginFacebook()
    {
      this.authService.LoginFacebbokUser().then(
        (res)=>{
          this.onLoginRedirect();
        }
      ).catch(err => console.log('err',err.message));
    }
    onLoginRedirect()
    {
      this.router.navigate(['admin/list-books']);
    }

}

import { Component, OnInit } from '@angular/core';
import { LoginfbService } from '../services/loginfb.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string; 

  constructor(
    public loginfbService: LoginfbService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitlogin(){
    this.loginfbService.loginEmail(this.email, this.password)
    .then( (res) =>{
      this.flashMensaje.show('Sesion Iniciada!', 
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/userlogged']);
    }).catch((err) =>{
      this.flashMensaje.show(err.messages, 
      {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    });
  }

  onClickGoogleLogin(){
    this.loginfbService.loginGoogle()
    .then((res) =>{
      this.router.navigate(['/userlogged']);
    }).catch( err => console.log(err.messages));
  }

}

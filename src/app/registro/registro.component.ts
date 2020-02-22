import { Component, OnInit } from '@angular/core';
import { LoginfbService } from '../services/loginfb.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';  
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public loginfbServices: LoginfbService,
    public router: Router,
    public flashMensaje: FlashMessagesService

  ) { }

  ngOnInit() {
  }

    onSubmitAddUser(){
      this.loginfbServices.registerUser(this.email, this.password).then(
        (res) =>{
          this.flashMensaje.show('Usuario creado Correctamente.', 
          {cssClass: 'alert-success', timeout: 4000});
          this.router.navigate(['/userlogged']);
        }).catch( (err) => {
          this.flashMensaje.show(err.messages, 
          {cssClass: 'alert-danger', timeout: 4000});
      });
    
  }

}

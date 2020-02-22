import { Component, OnInit } from '@angular/core';
import { LoginfbService } from '../services/loginfb.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogin: boolean;
  public nameUser: string;
  public emailUser: string;


  constructor(
    public loginfbService: LoginfbService
  ) { }

  ngOnInit() {
    this.loginfbService.getAuth().subscribe( auth =>{
      if (auth) {
        this.isLogin = true;
        this.nameUser = auth.displayName;
        this.emailUser = auth.email;
      }else{
        this.isLogin = false;
      }
    });
  }

  onClicklogout(){
    this.loginfbService.logout();
  }

}

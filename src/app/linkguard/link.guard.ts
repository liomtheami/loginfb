import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFireAuth } from '@angular/fire/auth/auth';
import {LoginfbService} from '../services/loginfb.service';

@Injectable()
export class LinkGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private loginfbService: LoginfbService
  ){}


    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |boolean{
      return this.loginfbService.afAuth.authState.take(1).map(authState => !! authState)
        .do(authenticated => {
          if (!authenticated) {
            this.router.navigate(['/login']);
          }
        })
      
      }
   
  }


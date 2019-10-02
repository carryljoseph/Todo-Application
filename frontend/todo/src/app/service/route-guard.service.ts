import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  
  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService,
    private route: Router) { }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //   if(this.hardcodedAuthenticationService.isUserLoggedIn())
    //     return true

    //   this.route.navigate(['login'])
    //   return false
    // }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.basicAuthenticationService.isUserLoggedIn())
        return true

      this.route.navigate(['login'])
      return false
    }
}

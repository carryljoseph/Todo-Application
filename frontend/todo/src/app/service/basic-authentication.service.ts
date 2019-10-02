import { Injectable } from '@angular/core';
import { AST } from '@angular/compiler';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  executeAuthenticationService(username,password){

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticaterUser',username)
          sessionStorage.setItem('token',basicAuthHeaderString)
          return data
        }
      )
    )
    //console.log('Entered Welcome service')
  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user===null)

}

getAuthenticatedUser(){
  return sessionStorage.getItem('authenticaterUser')
}

getAuthenticatedToken(){
  if(this.getAuthenticatedUser())
  return sessionStorage.getItem('token')
}

  logout(){
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')
  }

}
  export class AuthenticationBean{
    constructor(public message:string){

    }
  }


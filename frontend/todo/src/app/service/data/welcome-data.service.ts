import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{

  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient,
    private basicAuthenticationService:BasicAuthenticationService) { }

  getWelcomeMessage(){
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`)
    //console.log('Entered Welcome service')
  }

  getWelcomeMessageWithParam(name){
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken()

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/param/${name}`,
    {headers}
    )
    //console.log('Entered Welcome service')
  }

  // createBasicAuthenticationHeader(){
  //   let username = 'caroljoseph'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
  //   return basicAuthHeaderString
  // }

  // Access to XMLHttpRequest at 'http://localhost:8080/users/caroljoseph/todos' 
  // from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource


}

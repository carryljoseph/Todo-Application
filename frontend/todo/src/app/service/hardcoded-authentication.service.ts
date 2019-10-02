import { Injectable } from '@angular/core';
import { AST } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:String,password:String){
    if(username==='caroljoseph' && password==='elshaddai'){
      return true
    }
    return false
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    return !(user===null)

}

  logout(){
    sessionStorage.removeItem('username')
  }

}

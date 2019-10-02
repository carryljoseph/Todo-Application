import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'caroljoseph'
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials'

  constructor(private route: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { 

  }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username)
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      sessionStorage.setItem('username',this.username)
      this.invalidLogin=false
      this.route.navigate(['welcome',this.username])
    }else{
      this.invalidLogin=true
    }
  }

  handleBasicLogin(){
    // console.log(this.username)
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password)
    .subscribe(
      data => {
        console.log('inside')
        this.invalidLogin=false
        this.route.navigate(['welcome',this.username])
      },
      error => {
        console.log(error)
        this.invalidLogin=true
      }
    )
  }

  isUserLoggedIn(){
      let user = sessionStorage.getItem('authenticaterUser')
      return !(user===null)

  }

}

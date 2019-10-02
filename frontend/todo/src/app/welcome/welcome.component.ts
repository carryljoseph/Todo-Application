import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''
  serviceMessage:string

  constructor(private route: ActivatedRoute,
    private welcomeDataService:WelcomeDataService) { 

    this.name = this.route.snapshot.params['name']
  }

  ngOnInit() {
  }

  getWelcomeMessage(){
    console.log(this.welcomeDataService.getWelcomeMessage())
    this.welcomeDataService.getWelcomeMessage().subscribe(
     // response => console.log(response.message)
     response => this.handleSuccessMessage(response),
     error => this.handleError(error)
     
    )
  }

  getWelcomeMsgWithParam(){
    this.welcomeDataService.getWelcomeMessageWithParam(this.name).subscribe(
      response => this.handleSuccessMessage(response),
     error => this.handleError(error)
    )
  }

  handleSuccessMessage(response){
    this.serviceMessage = response.message
  }


  handleError(error){
    console.log(error.error.message)
  }

}

import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';

import axios from 'axios';
@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {

  currentCaptcha : null;
  constructor( private recaptchaV3Service: ReCaptchaV3Service,) { }

  ngOnInit(): void {
  }

  handleToken(token:any): void {
    console.log(token)
  }
  public executeImportantAction(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => this.handleToken(token));
  }
  resolved(captchaResponse: string): void {
    
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    //console.log('try to connect with token :', captchaResponse);
     axios.post(
      `https://mathessprodv2.herokuapp.com/api/captcha`,     
      
      {        
        token: captchaResponse
      }
    )
  .then( (response) => {
    console.log(response.data)
      this.currentCaptcha = response.data.success;
  })
  .catch(function (error) {
      console.log(error);
     
      
  });    
  }
  
}



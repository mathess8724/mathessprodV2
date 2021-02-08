import { Component, OnInit } from '@angular/core';
import {CaptchaComponent} from '../captcha/captcha.component';
import { ReCaptchaV3Service } from 'ng-recaptcha';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import axios from 'axios';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  
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
      `https://mathessprod--server.herokuapp.com/api/captcha`,     
      
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



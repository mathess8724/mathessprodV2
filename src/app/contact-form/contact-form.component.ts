

  import {Component} from '@angular/core';
  import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule, FormGroup, FormGroupName } from '@angular/forms';
  import {ErrorStateMatcher} from '@angular/material/core';
  import axios from 'axios';
  /** Error when invalid control is dirty, touched, or submitted. */
  export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
  
  /** @title Input with a custom ErrorStateMatcher */
  @Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
  })
  export class ContactFormComponent {

   loading = false;
   mailSent = false;
   error = false;
    
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
   
    name = new FormControl('', [
      Validators.required,
    ]);
    msg = new FormControl('', [
      Validators.required,
    ]);
    mailForm = new FormGroup({
      email: this.emailFormControl,
      name: this.name,
      msg: this.msg
    })
  
    matcher = new MyErrorStateMatcher();

    sendMail = async (msg: any, senderMail: any) => {
      this.loading = true;
     await axios.post(
        `https://mathessprodv2.herokuapp.com/api/sendmail`,     
        
        {        
          token: 'passed',
          senderMail,
          msg : msg
        }
      )
    .then( (response) => {
      console.log(response.data)
      
      this.loading = false;
      this.mailSent = true;
      response.data.success &&
      setTimeout( () => {
        this.mailSent = false;
        this.mailForm.reset();
      },1500)
     
    })
    .catch( (error)  =>{
      this.loading = false;
      this.error = true;
      setTimeout( () => {
        this.error = false;
      },1500);
        console.log(error);

        
    });
    }
    onSubmit = ()  =>{
       // { first: '', last: '' }
      this.mailForm.valid &&
     this.sendMail(this.msg.value, {name: this.name.value, mail:this.emailFormControl.value})
    }


  }

  


  import {Component} from '@angular/core';
  import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
  import {ErrorStateMatcher} from '@angular/material/core';
  
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
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    matcher = new MyErrorStateMatcher();
  }
  
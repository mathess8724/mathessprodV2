import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(e: any): void {
    e.preventDefault();
    grecaptcha.ready(function() {
      grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token: any) {
          // Add your logic to submit to your backend server here.
      });
    });
  }
}


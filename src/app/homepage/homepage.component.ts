import { Component, OnInit , Input} from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  
  constructor(public dialog: MatDialog) {}
  @Input() ngStyle: { [klass: string]: any; } | undefined;
  title = 'Homepage'
  contactPage = ContactComponent;
  
  getWelcomePicUrl = () => {

    return "url('https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png')";
  }
  openDialog = (): void =>{
    

    const dialogRef = this.dialog.open(HomepageComponent, {
      width: '250px',
      data: {name:'', animal: 'this.animal'}
    });

}
  ngOnInit(): void {
  }

}

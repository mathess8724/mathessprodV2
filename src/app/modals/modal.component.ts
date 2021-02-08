import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  @Input() dialogContent : Component | undefined ;
  ngOnInit(): void {
  }
  

  openDialog = (dialogContent= ModalComponent): void =>{
    const dialogRef = this.dialog.open(dialogContent, {
      width: '250px',
      data: {name:'', animal: 'this.animal'}
    });

}
}

import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ability } from 'src/app/model/ability';

@Component({
  selector: 'app-home-page-edit',
  templateUrl: './home-page-edit.component.html',
  styleUrls: ['./home-page-edit.component.css']
})
export class HomePageEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HomePageEditComponent>,
    @Inject(MAT_DIALOG_DATA) public ability: ability, public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();   
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ability } from 'src/app/model/ability';
import { HomePageComponent } from '../home-page.component';

@Component({
  selector: 'app-home-page-text-edit',
  templateUrl: './home-page-text-edit.component.html',
  styleUrls: ['./home-page-text-edit.component.css']
})
export class HomePageTextEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HomePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}
  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

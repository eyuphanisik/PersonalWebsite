import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AboutMeComponent } from '../about-me.component';

@Component({
  selector: 'app-about-me-edit',
  templateUrl: './about-me-edit.component.html',
  styleUrls: ['./about-me-edit.component.css']
})
export class AboutMeEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AboutMeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

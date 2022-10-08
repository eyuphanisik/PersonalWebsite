import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactEditComponent } from '../contact/contact-edit/contact-edit.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutMe :Text;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  isAdminLogin(){
    if (sessionStorage.getItem("token")) return true;
    return false;  
 }
 openSummary(){
  let aboutMeClone : Text = structuredClone(this.aboutMe)
  const dialogRef = this.dialog.open(ContactEditComponent, {
    width: '600px',
    data: aboutMeClone,

  });
  dialogRef.afterClosed().subscribe((result: Text) => {
    if(result != null){
      this.aboutMe  = result;
    }
   
  }); 
}
}

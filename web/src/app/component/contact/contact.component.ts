import { Text } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact : Text;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  isAdminLogin(){
    if (sessionStorage.getItem("token")) return true;
    return false;  
 }
 openSummary(){
  let aboutMeClone : Text = structuredClone(this.contact)
  const dialogRef = this.dialog.open(ContactEditComponent, {
    width: '600px',
    data: aboutMeClone,

  });
  dialogRef.afterClosed().subscribe((result: Text) => {
    if(result != null){
      this.contact  = result;
    }
   
  }); 
}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ability } from 'src/app/model/ability';
import { HomePageEditComponent } from './home-page-edit/home-page-edit.component';
import { HomePageTextEditComponent } from './home-page-text-edit/home-page-text-edit.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isAdmin: boolean;
  summary : Text;
  abilities : ability[] = [{name:"java", percent : 100},
                          {name:"angular", percent : 80}]
  constructor(public dialog: MatDialog) {  }


  ngOnInit(): void {
    this.isAdmin = this.isAdminLogin();
  }

  isAdminLogin() {
    if (sessionStorage.getItem("token")) return true;
    return false;

  }

  deleteItem(ability: ability){
    this.abilities.splice(this.abilities.indexOf(ability), 1)
  }

  addToAbility(){
    let ability :ability = {name:"", percent: 0}
    this.openAbility(ability)

  }
  openAbility(ability) {
    let abilityClone : ability= structuredClone(ability)
    const dialogRef = this.dialog.open(HomePageEditComponent, {
      width: '250px',
      data: abilityClone,

    });
    dialogRef.afterClosed().subscribe((result : ability) => {
      if(result != null){
        if(this.abilities.indexOf(ability) != -1){
          this.abilities[this.abilities.indexOf(ability)]  = result;
        }
        else{
          this.abilities.push(result)
        }
      }
     
    }); 
  }
  openSummary(){
    let summaryClone : Text = structuredClone(this.summary)
    const dialogRef = this.dialog.open(HomePageTextEditComponent, {
      width: 'auto',
      data: summaryClone,

    });
    dialogRef.afterClosed().subscribe((result : Text) => {
      if(result != null){
        this.summary  = result;
      }
     
    }); 
  }

}

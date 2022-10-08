import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password : String = ""
  userName : String = ""
  private token : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkV5w7xwaGFuIEnFn8SxayIsImlhdCI6MTUxNjIzOTAyMn0.uG6AzFX2V622NKDtIdh8KZTdmNp-VgZnEbkPgsiV5n0"
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }

  login(userName : String, password: String){
    if(userName == "admin" && password == "1905"){
        sessionStorage.setItem("token", this.token)
        window.location.pathname = ""      
    }
  }
}

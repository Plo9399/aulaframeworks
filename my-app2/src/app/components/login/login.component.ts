import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isError = false;
  isSuccess = false

  user = ""
  pwd = ""

  login() {

    console.log("User= " + this.user + "Password = " + this.pwd)
    if (this.user == "pedro.pessoal288" && this.pwd == "1234") {
      this.isError = false;
      this.isSuccess = true;
      console.log("login Aprovado")
    } else {
      this.isError = true;
      this.isSuccess = false;
    }
  }

  }
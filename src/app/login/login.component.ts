import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='';
  password='';
signIn() {
console.log("username=",this.username,"password=",this.password);
if(this.username==='admin' && this.password==='lucas'){
  console.log("acceso correcto");
    }else{
      console.log("Login incorrecto");
    }
  }

}


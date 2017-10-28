import { Component, OnInit } from '@angular/core';
import { LoginDirDirective } from '../Directives/login-dir.directive'
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show:false;
  act:String;
  act2:String
  constructor(
    private loginser:LoginServiceService

  ) { }

  ngOnInit() {
    
  }
  login(email,pass){
this.loginser.login(email,pass)

    
    }
   

activate()
{
  this.act='active';
  this.act2='';
}
activated()
{
  this.act='';
  this.act2='active';
}
}



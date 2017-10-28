import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
user:String
islogin:boolean
  
constructor(
  private rou:Router,
  private back: LoginServiceService
) 
{


}


private list=false;
  ngOnInit() {
    this.back.loginlis(dt => {
      this.user=dt.user,
      this.islogin=dt.islogin
    
            });
  }
  log(){
  this.list=!this.list;
  }
HomeFun(){
  this.rou.navigate(['home'])
}
AddmsFun(){

}
LoginFun(){
this.rou.navigate(['login'])
}
logout(){
  this.back.logout()
}

}

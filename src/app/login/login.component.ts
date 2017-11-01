import { loggedinpojo } from './../Pojo/loggedinPojo';
import { signUser } from './../Pojo/loginPojo';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginDirDirective } from '../Directives/login-dir.directive'
import { LoginServiceService } from '../Services/login-service.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:signUser;

  // myform:FormGroup;
  constructor(
              // private fb:FormBuilder,
              // private router:Router,
              private lgnser:LoginServiceService  ) { 
                // this.user=new signUser()
              }

  ngOnInit() {
   
  }
  // signUp(myfrm:NgForm){
  //   let userdata:signUser=new signUser();
  //   userdata.fullname=myfrm.value.fullname;
  //   userdata.email=myfrm.value.email;
  //   userdata.mobile=myfrm.value.mobile;
  //   userdata.password=myfrm.value.password;
  //   userdata.confirmPass=myfrm.value.confirmPass;
  //   this.lgnser.signUpViaLink1(userdata).subscribe(res=>console.log(res));
  //   }  
  //THIS CODE DIRECTLY PUSH DATGA IN FIREBASE


signUp(myfrm:NgForm){
let userdata:signUser=new signUser();
userdata.fullname=myfrm.value.fullname;
userdata.email=myfrm.value.email;
userdata.mobile=myfrm.value.mobile;
userdata.password=myfrm.value.password;
userdata.confirmPass=myfrm.value.confirmPass;
this.lgnser.signUpViaLink(userdata);
console.log(userdata);

}
login(LgnFrm:NgForm){
  console.log(LgnFrm)
  let login:loggedinpojo=new loggedinpojo();
  login.email=LgnFrm.value.email;
  login.password=LgnFrm.value.password;
  this.lgnser.loggedin(login)
}


}





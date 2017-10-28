import { Router } from '@angular/router';
import { Injectable,  } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class LoginServiceService {

  private em: EventEmitter<any>;
  private z;
    constructor(private route:Router) {
      this.em = new EventEmitter<any>();
    }

  login(email,pass){
    if (email==="z"&&pass==="z"){
  sessionStorage.setItem('currentUser',email)
var data= sessionStorage.getItem(email)
      var z=localStorage.getItem('currentUser');
      console.log(z);
      this.route.navigate(['home'])
      this.em.emit({
      user: email,
      islogin:true
   })
}
    else {
  console.log("fail");
  }
}
  logout(){
sessionStorage.removeItem('currentUser')}
  loginlis(callback: any) {
    this.em.subscribe(newDt => {
      callback(newDt);
    });
  }

}

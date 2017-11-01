import { loggedinpojo } from './../Pojo/loggedinPojo';
import { signUser } from './../Pojo/loginPojo';
import { Router } from '@angular/router';
import { Injectable,  } from '@angular/core';
import{ Http } from '@angular/http'

declare var firebase;

@Injectable()
export class LoginServiceService {

    constructor(
      private http:Http) {
      }

// signUpViaLink1(userdata:signUser){
//   console.log(userdata);
//   return this.http.post('https://mess-a8efb.firebaseio.com/DataInfirbase.json', {userdata});
// }
signUpViaLink(userdata:signUser){
    firebase.auth().createUserWithEmailAndPassword(userdata.email,userdata.password).catch(function(error) {
      // Handle Errors here.
      console.log(userdata);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

loggedin(login:loggedinpojo){
  console.log(login);
  firebase.auth().signInWithEmailAndPassword(login.email,login.password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

}

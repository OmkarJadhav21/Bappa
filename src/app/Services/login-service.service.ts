import { loggedinpojo } from './../Pojo/loggedinPojo';
import { signUser } from './../Pojo/loginPojo';
import { Router } from '@angular/router';
import { Injectable,  } from '@angular/core';
import{ Http } from '@angular/http'

declare var firebase;
var googleprovider = new firebase.auth.GoogleAuthProvider();
var gitprovider = new firebase.auth.GithubAuthProvider();
var fbprovider = new firebase.auth.FacebookAuthProvider();


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

logGoogle(){
  firebase.auth().signInWithPopup(googleprovider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

logGithub(){
  firebase.auth().signInWithPopup(gitprovider).then(function(result) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

logFacebook(){
  firebase.auth().signInWithPopup(fbprovider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
}

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MyRoutingModule } from './app.routers';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginDirDirective } from './Directives/login-dir.directive';
import { LoginServiceService } from './Services/login-service.service';
import { FormsModule } from '@angular/forms';
import{ ReactiveFormsModule }from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    LoginDirDirective,
   ],

  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    MyRoutingModule,
    NgbModule.forRoot(),
    NgbModule ,
    FormsModule,
    ReactiveFormsModule
    ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
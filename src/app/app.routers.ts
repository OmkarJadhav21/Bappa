import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';


const routes:Routes=[
    // { path:'',component:HomeComponent},
    { path:'home',component:HomeComponent },
    { path:'login',component:LoginComponent},
    { path:'forget-pass',component:ForgetPassComponent}
];

export const MyRoutingModule = RouterModule.forRoot(routes);
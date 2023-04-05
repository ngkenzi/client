import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path:"task", component: NavBarComponent},
  {path:"", component: LoginPageComponent},
  {path:"register", component: RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

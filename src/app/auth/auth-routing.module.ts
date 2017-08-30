import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'register'
    }
  },
   {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
    data: {
      title: 'forgot-password'
    }
  },
  {
    path: 'resetpassword/:id',
    component: ResetPasswordComponent,
    data: {
      title: 'reset-password'
    }
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

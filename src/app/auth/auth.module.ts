import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { LoginService } from './services/login.service';
import { CustomFormsModule } from 'ng2-validation'

import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        CustomFormsModule
    ],
    providers: [LoginService],
    declarations: []
})
export class AuthModule { }

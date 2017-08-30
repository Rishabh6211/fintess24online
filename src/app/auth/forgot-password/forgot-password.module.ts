import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forgotPasswordRoutingModule } from './forgotpassword-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterializeModule } from "angular2-materialize";
import { CustomFormsModule } from 'ng2-validation'
import { LoginService } from '../services/login.service';
import { FormsModule }   from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password.component';
@NgModule({
  imports: [
    CommonModule,
    forgotPasswordRoutingModule,
    SharedModule,
    CustomFormsModule,
    FormsModule,
    MaterializeModule
  ],
  declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordModule { }

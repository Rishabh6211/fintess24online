import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resetPasswordRoutingModule } from './resetpassword-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterializeModule } from "angular2-materialize";
import { CustomFormsModule } from 'ng2-validation'
import { LoginService } from '../services/login.service';
import { FormsModule }   from '@angular/forms';
import { ResetPasswordComponent } from './reset-password.component';
import { EqualValidator } from './equal-validator.directive';
@NgModule({
  imports: [
    CommonModule,
    resetPasswordRoutingModule,
    SharedModule,
    CustomFormsModule,
    FormsModule,
    MaterializeModule
  ],
  declarations: [ResetPasswordComponent,EqualValidator]
})
export class ResetPasswordModule { }

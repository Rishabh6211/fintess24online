import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CustomFormsModule } from 'ng2-validation'

import { LoginComponent } from './login.component';

import { LoginService } from '../services/login.service';

import { LoginRoutingModule } from './login-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { MaterializeModule } from "angular2-materialize";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        LoginRoutingModule,
        CustomFormsModule,
        MaterializeModule
    ],
    providers: [LoginService],
    declarations: [LoginComponent]
})
export class LoginModule { }

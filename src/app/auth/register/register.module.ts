import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { RegisterComponent } from './register.component';
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service';
import { RegisterRoutingModule } from './register-routing.module';
import { EqualValidator } from './equal-validator.directive';
import { CustomFormsModule } from 'ng2-validation'
import { SharedModule } from '../../shared/shared.module';
import { FlashMessagesModule } from 'ngx-flash-messages';

// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        ModalModule.forRoot(),
        FormsModule,
        RegisterRoutingModule,
        CustomFormsModule,
        SharedModule,
        FlashMessagesModule
    ],
    providers: [LoginService, RegisterService],
    declarations: [RegisterComponent,EqualValidator]
})
export class RegisterModule { }

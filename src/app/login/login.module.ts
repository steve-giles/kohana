import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog.component';
import {MaterialModule} from '../shared/material.module';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  exports: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ErrorHandlerModule { }

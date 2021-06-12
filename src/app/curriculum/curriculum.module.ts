import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumComponent } from './curriculum/curriculum.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CurriculumModule { }

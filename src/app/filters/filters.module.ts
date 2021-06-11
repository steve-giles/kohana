import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    FiltersComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class FiltersModule { }

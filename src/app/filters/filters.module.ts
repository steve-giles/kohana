import { FiltersComponent } from './filters/filters.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';



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

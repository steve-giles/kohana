import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FiltersComponent } from './filters/filters.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CompanyComponent } from './company/company.component';



@NgModule({
  declarations: [
    CurriculumComponent,
    FiltersComponent,
    CompanyComponent
  ],
  exports: [
    FiltersComponent,
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }

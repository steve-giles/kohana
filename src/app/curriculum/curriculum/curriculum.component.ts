import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  curriculums$: Observable<any[]>;
  curriculumForm: FormGroup;

  ngOnInit(): void {
    this.curriculumForm = this.formBuilder.group({
      selectedCurriculum: '',
      selectedCourse: ''
    });
  }

}

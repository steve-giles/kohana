import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor() { }

  curriculums$: Observable<any[]>;
  curriculumForm: FormGroup;

  ngOnInit(): void {
  }

}

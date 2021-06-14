import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  filters$: Observable<any[]>;
  filterForm: FormGroup;

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      selectedFilter: ''
    });
  }

}

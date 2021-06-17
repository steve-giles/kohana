import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {FilterData} from '../../models/filters.types';
import {FiltersService} from './filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(public filtersService: FiltersService, private formBuilder: FormBuilder) { }

  filters$: Observable<FilterData[]>;
  filterForm: FormGroup;
  filterDetails: FilterData;
  companyId: string;

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      selectedFilter: ''
    });

    this.filterForm.get('selectedFilter').valueChanges.subscribe((data: string) => {
      this.filtersService.getFilterSet(data).subscribe(result => {
        this.filterDetails = result;
        console.log(result);
      });
    });
  }

  onCompany(companyId: string) {
    this.companyId = companyId;
    this.filters$ = this.filtersService.getFiltersForCompany(companyId);
  }
}

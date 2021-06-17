import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyService} from './company.service';
import {Observable} from 'rxjs';
import {Company} from '../../models/company.types';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Output() company = new EventEmitter<string>();

  constructor(public companyService: CompanyService, private formBuilder: FormBuilder) { }

  companies$: Observable<Company[]>;
  companyForm: FormGroup;

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      selectedCompany: ''
    });

    this.companies$ = this.companyService.getCompanies();

    this.companyForm.get('selectedCompany').valueChanges.subscribe((data: string) => {
      this.company.emit(data);
    });
  }

}

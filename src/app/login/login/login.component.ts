import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  form: FormGroup;
  public loginInvalid = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../backend/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  form: FormGroup;
  private returnUrl: string;
  private formSubmitAttempt = false;

  public loginInvalid = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
    ) {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    const baseApiUrl = this.route.snapshot.queryParamMap.get('baseApiUrl');

    if (baseApiUrl) {
      this.authService.baseApiUrl = baseApiUrl;
    }

    if (token) {
      this.authService.accessToken = token;
      this.authService.validToken().subscribe(
        (result: boolean) => {
          this.authService.authorized = true;
          this.router.navigate(['/']);
        },
        (error) => {
          debugger;
        });
    }

    if (this.authService.checkAuthenticated()) {
      this.router.navigate([this.returnUrl]);
    }
  }

  onSubmit(): void {
    this.loading = true;
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      const username = this.form.get('username')?.value;
      const password = this.form.get('password')?.value;
      this.authService.authenticate(username, password).subscribe(
        results => {
          this.loading = false;
          this.router.navigate(['/']);
        },
        error => {
          this.loading = false;
          this.loginInvalid = true;
        });
    } else {
      this.formSubmitAttempt = true;
    }
  }

}

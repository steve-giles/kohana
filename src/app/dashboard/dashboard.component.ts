import { Component, OnInit } from '@angular/core';
import {AuthService} from '../backend/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  baseApiUrl = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.baseApiUrl = this.authService.baseApiUrl;
  }

}

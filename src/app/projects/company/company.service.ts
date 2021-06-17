import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../backend/auth.service';
import {Company} from '../../models/company.types';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getCompanies(): Observable<Company[]> {
    const url = `${this.authService.baseApiUrl}v2/profile/companies`;
    return this.http.get(url)
      .pipe(map((result: any) => {
        return result.data ? result.data : result;
      }));
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FilterData} from '../../models/filters.types';
import {map} from 'rxjs/operators';
import {AuthService} from '../../backend/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getFilterSet(filterSetId: string): Observable<FilterData> {
    const url = `${this.authService.baseApiUrl}v2/filterset/${filterSetId}`;
    return this.http.get(url)
      .pipe(map((result: any) => {
        return result.data ? result.data : result;
      }));
  }

  public getFiltersForCompany(companyId: string): Observable<FilterData[]> {
    const url = `${this.authService.baseApiUrl}v2/company/${companyId}/filterset`;
    return this.http.get(url)
      .pipe(map((result: any) => {
        return result.data ? result.data : result;
      }));
  }
}

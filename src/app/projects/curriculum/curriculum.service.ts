import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CurriculumData} from '../../models/curriculum.types';
import {map} from 'rxjs/operators';
import {AuthService} from '../../backend/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getCurriculum(curriculumId: string): Observable<CurriculumData> {
    const url = `${this.authService.baseApiUrl}v2/curriculum/${curriculumId}`;
    return this.http.get(url)
      .pipe(map((result: any) => {
        return result.data ? result.data : result;
      }));
  }

  public getCurriculumForCompany(): Observable<CurriculumData[]> {
    const url = `${this.authService.baseApiUrl}v2/company/51/curriculum`;
    return this.http.get(url)
      .pipe(map((result: any) => {
        return result.data ? result.data : result;
      }));
  }
}

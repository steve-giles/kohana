import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ErrorDialogComponent} from '../error-handler/error-dialog.component';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService,
              private dialog: MatDialog,
              private router: Router) {}

  /**
   * Intercepts the http request
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', authToken),
    });

    return next.handle(modifiedReq).pipe(
      catchError(error => {
        this.handleError(error, authToken);
        return throwError(error);
      })
    );
  }

  /**
   * HTTP custom error handler
   * @param error represents an error or failure
   * @param authToken
   */
  handleError(error: HttpErrorResponse, authToken: string) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else if (error.status === 401 && authToken.length > 10) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.data = "Your session has expired. Please login or relaunch the application.";
      this.dialog.open(ErrorDialogComponent, dialogConfig);
      this.router.navigate(['login']);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
  }
}

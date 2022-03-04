import { Injectable } from '@angular/core';
import { Observable, retry, throwError } from 'rxjs';
import { User } from './../_Models/user';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient!: HttpClient;
  constructor() {
  }

  private baseURL:string = environment.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  connectUser(endUrl: string, user: User): Observable<Array<any>> {
    return this.httpClient.post<Array<any>>(this.baseURL + endUrl, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      )
  }

  errorHandl(error: any) {
    let errorMessage = '';
    let errorStatus = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      errorStatus = error.status;
    }
    console.log(errorMessage);
    return throwError(errorStatus);
  }
}

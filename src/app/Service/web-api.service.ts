import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {


  constructor(private httpClient: HttpClient) {
  }

  // Get call method
  // Param 1 : authToken
  // Param 2 : url
  get(url: string, auth_token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-Control' : 'no-cache',
        'Pragma' : 'no-cache',
        'Authorization': `Bearer ${auth_token}`
      }),
      observe: "response" as 'body'
    };

    return this.httpClient.get(
      url,
      httpOptions
    )
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }

  // Post call method
  // Param 1 : authToken
  // Param 2 : url
  // Param 3 : model
  post(url: string, model: any, auth_token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      }),
      observe: "response" as 'body'
    };
    return this.httpClient.post(
      url,
      model,
      httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }

    // Post call method
  // Param 1 : authToken
  // Param 2 : url
  // Param 3 : model
  postAuth(url: string, model: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: "response" as 'body'
    };
    return this.httpClient.post(
      url,
      model,
      { responseType: 'text' })
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }

  // Put call method
  // Param 1 : authToken
  // Param 2 : url
  // Param 3 : model
  put(url: string, model: any, auth_token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      }),
      observe: "response" as 'body'
    };

    return this.httpClient.put(
      url,
      model,
      httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }

    // Put call method
  // Param 1 : authToken
  // Param 2 : url
  // Param 3 : model
  delete(url: string, auth_token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${auth_token}`
      }),
      observe: "response" as 'body'
    };
    return this.httpClient.delete(
      url,
      httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }


  private ReturnResponseData(response: any) {
    return response;
  }

  private handleError(error: any) {
    return throwError(error);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BusinessService {
    baseUrl = 'http://localhost:3000/employees';
    constructor(private httpClient: HttpClient) {}

    Get<T>(): Observable<T> {
        return this.httpClient.get<T>(this.baseUrl)
            .pipe(catchError(this.handleError));
    }

    GetById<T>(id: string): Observable<T> {
        return this.httpClient.get<T>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    Insert<T>(data: T): Observable<T> {
        return this.httpClient.post<T>(this.baseUrl, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
        .pipe(catchError(this.handleError));
    }

    Update<T>(data: T): Observable<T> {
        return this.httpClient.put<T>(this.baseUrl, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
        .pipe(catchError(this.handleError));
    }

    Delete<T>(id: string): Observable<T> {
        return this.httpClient.delete<T>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    // tslint:disable-next-line:typedef
    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }
}

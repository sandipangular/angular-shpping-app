import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BusinessService
{
    constructor(private httpClient:HttpClient){}

    HttpGet<T>(endPoint: string): Observable<T[]> {
        return this.httpClient.get<T[]>(endPoint);
    }

    HttpGetById<T>(endPoint:string, Id:string):Observable<T> {
        return this.httpClient.get<T>(`${endPoint}/${Id}`);
    }

    HttpPost<T>(endPoint:string, argument: T): Observable<T> {
        return this.httpClient.post<T>(endPoint, argument, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }

    HttpPut<T>(endPoint:string, argument: T): Observable<T> {
        return this.httpClient.put<any>(endPoint, argument,{
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }

    HttpDelete<T>(endPoint:string, Id:string): Observable<T> {
        return this.httpClient.delete<T>(`${endPoint}/${Id}`);
    }

    //https://arjunphp.com/angular-global-api-service-request-method - Single Service Handle all HttpRequest
}

export class CommanConfigration {
    static EndPoint = 'http://localhost:3000/employees';
}
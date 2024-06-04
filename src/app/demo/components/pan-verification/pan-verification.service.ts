import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanVerificationService {

  constructor(private http: HttpClient) { }
  verifyPan(pan: string): Observable<boolean> {
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.post(apiEndpoint, { pan }).pipe(
      map(response => {
        console.log('Mock API response:', response);
        return true;
      }),
      catchError(error => {
        console.error('Mock API error:', error);
        return of(false);
      })
    );
  }
}


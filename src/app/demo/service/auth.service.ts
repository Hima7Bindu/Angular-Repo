import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/Auth/api/auth/';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(API_URL + 'signup', {
      username,
      email,
      password
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(API_URL + 'signin', {
      email,
      password
    });
  }

  logout(): Observable<any> {
    // Logic for logging out, if needed
    return this.http.post(API_URL + 'logout', {});
    
  }

  isLoggedIn(): boolean {
    // Implement logic to check if user is logged in
    // For example, check if token exists in local storage or session storage
    return !!localStorage.getItem('token');
  }
}

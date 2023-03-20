import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { UserDto } from '../models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private tokenKey = 'EFDummyAPP_authToken';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  login(body: { username: string, password: string }) {
    return this.http.post(`${this.apiUrl}/auth/login`, body, this.httpOptions)
  }

  // logout() {
  //   // remove user from local storage to log user out
  //   // localStorage.removeItem(G.LocalVariable.Auth);
  //   // this.store.auth = null;
  // }

  loginHandler(user: UserDto) {
    // localStorage.setItem(G.LocalVariable.Auth, JSON.stringify(user));
    // this.store.auth = user;
    console.log('[AuthService] loginHandler, user:', user);
  }

  // Store the authentication token
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve the authentication token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // Remove the authentication token and log out the user
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}

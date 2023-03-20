import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Don't add token header for the login request
        if (request.url.includes('/login')) {
            return next.handle(request);
        }

        const authToken = this.authService.getToken();

        // Add the token to the request headers if the user is authenticated
        if (authToken) {
            const authReq = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${authToken}`)
            });

            return next.handle(authReq);
        }

        return next.handle(request);
    }
}
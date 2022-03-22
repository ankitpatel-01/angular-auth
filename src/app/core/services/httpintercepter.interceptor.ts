import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HTTPINTERCEPTOR implements HttpInterceptor {

  private apiUrl: string = "http://localhost:3000";
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const token = this.authService.getToken();
    const isLoggedIn = this.authService.isLoggedIn;
    const isApiUrl = request.url.startsWith(this.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Authorization token ${token}` }
      });
    }
    return next.handle(request).pipe(
      // map(res => {
      //   console.log("Passed through the interceptor in response");
      //   return res
      // }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 200) {
            console.log("status 200 ok")
          }
          if (err.status === 404) {
            console.log("status 404 not found")
          }
        }
        return throwError(err);
      }),
    );
  }
}

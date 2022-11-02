import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorCallsService  implements HttpInterceptor {

  constructor(/*private cookieService:CookieService*/) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = "token";/*this.cookieService.get('token')*/
      let newRequest = request
      newRequest = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        }
      )
      return next.handle(newRequest)

    } catch (e) {
      console.log('ERROR', e)
      return next.handle(request);
    }
  }
}

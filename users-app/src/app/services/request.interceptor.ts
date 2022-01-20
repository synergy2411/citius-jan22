import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor{


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("[REQUEST INTERCEPTOR]", req)
    const clonedReq = req.clone({
      params : new HttpParams().set("auth", "Bearer token")
    })
    return next.handle(clonedReq);
  }

}

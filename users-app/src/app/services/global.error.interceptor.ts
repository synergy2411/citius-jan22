import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class GlobalErrorInterceptor implements HttpInterceptor{


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError(err => {
        if(err instanceof HttpErrorResponse){
          switch (err.status) {
            case 401: {
              console.log("401 - Error")
              break;
            }
            case 404: {
              console.log("404 - Error")
              break;
            }
            case 500: {
              console.log("500 - Error")
              break;
            }
          }
        }
        return throwError(err)
      }))
  }

}

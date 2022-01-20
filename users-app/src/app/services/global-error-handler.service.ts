import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalHttpErrorHandlerService implements ErrorHandler{

  handleError(error: any): void {
    console.log("Global Error Handler works")
    console.error(error)
  }

}

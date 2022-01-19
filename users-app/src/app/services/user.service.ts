import { Injectable } from "@angular/core";
import { USER_DATA } from "../model/mocks";

@Injectable({
  providedIn : "root"
})
export class UserService{

  getUserData(){
    return USER_DATA;
  }
}

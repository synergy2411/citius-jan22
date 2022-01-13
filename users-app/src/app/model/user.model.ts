import { Comment } from "./comment.model";

export interface User{
  firstName : string;
  lastName : string;
  dob : Date;
  isWorking : boolean;
  income : number;
  company : string;
  imagePath : string;
  votes : number;
  comments : Comment[]
}


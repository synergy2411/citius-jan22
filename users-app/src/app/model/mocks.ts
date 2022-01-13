import { User } from "./user.model";

export const USER_DATA : User[] = [{
  firstName : "bill",
  lastName : "gates",
  dob : new Date("Dec 21, 1965"),
  isWorking : true,
  income : 50000,
  company : "Microsoft",
  imagePath : "./assets/images/bill.jpeg",
  votes : 130,
  comments : [
    {stars : 5, body : "Great work", author : "test@test.com"},
    {stars : 4, body : "Well done", author : "foo@test.com"},
  ]
},{
  firstName : "steve",
  lastName : "jobs",
  dob : new Date("Jan 21, 1965"),
  isWorking : false,
  income : 0,
  company : "Apple",
  imagePath : "./assets/images/steve.jpeg",
  votes : 170,
  comments : []
},{
  firstName : "tim b.",
  lastName : "lee",
  dob : new Date("Aug 1, 1965"),
  isWorking : true,
  income : 40000,
  company : "World Wide Web",
  imagePath : "./assets/images/tim.jpeg",
  votes : 120,
  comments : [
    {stars : 4, body : "Nicely done", author: "test@test.com"}
  ]
}
]

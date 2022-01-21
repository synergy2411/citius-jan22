import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem('userInfo', JSON.stringify({ email, password }));
        resolve({message : "SUCCESS"})
      },1500)
    });
  }

  onLogin(email: string, password: string) {
    return new Observable((observer) => {
      const user = localStorage.getItem('userInfo');
      if (user) {
        const userObj = JSON.parse(user);
        const { email: userEmail, password: userPassword } = userObj;
        if (email === userEmail && password === userPassword) {
          observer.next({ message: 'SUCCESS' });
        }
      } else {
        observer.error(new Error('User does not exist'));
      }
    });
  }
}

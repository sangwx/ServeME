import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getCustomer() {

  }
    getUser(): Observable<Customer> {
        return of(customer);
    }
}

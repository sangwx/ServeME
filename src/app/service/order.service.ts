import { Injectable } from '@angular/core';
import {Order} from '../Model/order';
import {Urls} from '../Model/model.url';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpService} from './http-service';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
    private url_getCustomerOrder = Urls.getCustomerOrder;
    private url_CreateOrder = Urls.CreateOrder;
    private url_getVendorOrder = Urls.getVendorOrder;

  constructor(private http: HttpService,
              private http1: HttpClient,
              private router: Router) { }

    getCustomerOrderList(){
        return this.http1.post<any>(this.url_getCustomerOrder, null).pipe(
            tap(body => console.log(body))
        );
    }

    getVendorOrderList(){
        return this.http1.post<any>(this.url_getVendorOrder, null).pipe(
            tap(body => console.log(body))
        );
    }

    createOrder(order: Order){
        return this.http1.post<any>(this.url_CreateOrder, JSON.stringify(order)).pipe(
            tap(body => console.log(body))
        );
    }
}

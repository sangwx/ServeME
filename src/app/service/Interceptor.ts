import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {Urls} from '../Model/model.url';
import {tap} from 'rxjs/operators';


@Injectable()
export class BaseInterceptor implements HttpInterceptor {

    private readonly baseUrl: string;

    constructor(private userService: UserService) {
        this.baseUrl = Urls.apiUrl;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.startsWith('http')) {
            req = req.clone({
                url: this.baseUrl + req.url,
                setHeaders: {'Content-Type': 'application/json', Authorization: this.getToken() ? 'Bearer ' + this.getToken() : ''}
            });
        }

        return next.handle(req);
    }

    // intercept(req: HttpRequest<any>,
    //           next: HttpHandler): Observable<HttpEvent<any>> {
    //
    //     const token = window.localStorage.getItem("jwt");
    //
    //     if (token) {
    //         const cloned = req.clone({
    //             headers: req.headers.set("Authorization",
    //                 "Bearer " + token)
    //         });
    //
    //         return next.handle(cloned);
    //     }
    //     else {
    //         return next.handle(req);
    //     }
    // }

    getToken() {
        let jwt: string = window.localStorage.getItem('jwt');
        return jwt.replace('"', '').replace('"', '');
    }
}

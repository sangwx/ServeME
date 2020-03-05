import {Injectable} from '@angular/core';
import {Urls} from '../Model/model.url';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../Model/user';
import {HttpService} from './http-service';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import { Order } from '../Model/order';


@Injectable({
    providedIn: 'root'
})
export class UserService {


    set user(value: User) {
        this._user = value;
    }

    get user() {
        return this._user;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get userName() {
        return this._userName;
    }

    private url_register = Urls.register;
    private url_login = Urls.login;
    private url_getQuestion = Urls.getQuestion;
    private url_postAnswer = Urls.postAnswer;
    private url_postNewPwd = Urls.postNewPwd;
    private url_getUserInfo = Urls.getUserInfo;
    private url_updateUserInfo = Urls.updateUserInfo;
    private url_updatePwd = Urls.loginPwd;


    private _userName: string;
    private _user: User;
    private _order: Order;


    // httpOptions = {
    //     headers: new HttpHeaders({Authorization: UserService.getToken() ? 'Bearers ' + UserService.getToken() : ''})
    // };
    // httpOptions = {
    //     headers: new HttpHeaders().set('Content-Type', 'application/json')
    //         .set('Authorization', 'Bearer ' + this.getToken())
    // };

    constructor(private http: HttpService,
                private http1: HttpClient,
                private router: Router
    ) {

    }


    addUser(user: User): Observable<any> {
        const headers = {headers: {'Content-Type': 'application/json'}};
        return this.http1.post<User>(this.url_register, JSON.stringify(user), headers).pipe(
            tap(body => console.log(body))
        );
    }

    login(email: string, password: string): Observable<any> {
        const headers = {headers: {'Content-Type': 'application/json'}};
        let json = {
            'userName': email,
            'passWord': password
        };
        return this.http1.post<any>(this.url_login, JSON.stringify(json), headers).pipe(
            tap(body => this.user = body.result[1])

        );
    }

    getQuestion(name: string): Observable<any> {
        let json1 = {
            'userName': name
        };
        return this.http1.post<any>(this.url_getQuestion, JSON.stringify(json1)).pipe(
            tap(body => console.log(body))
        );
    }

    postAnswer(name: string, question: string, answer: string): Observable<any> {
        let json2 = {
            'userName': name,
            'question': question,
            'answer': answer
        };
        return this.http1.post<any>(this.url_postAnswer, JSON.stringify(json2)).pipe(
            tap(body => console.log(body))
        );
    }

    postNewPwd(name: string, password: string): Observable<any> {
        let json3 = {
            'userName': name,
            'passWord': password
        };
        return this.http1.post<any>(this.url_postNewPwd, JSON.stringify(json3)).pipe(
            tap(body => console.log(body))
        );
    }


    updateUserIfo(Phone: string, type: string, state: string, city: string, address: string, zipcode: string, vendordescription: string, photourl: string): Observable<any> {
        let data = {
            'phone': Phone,
            'type': type,
            'userState': state,
            'userCity': city,
            'userDetailAddress': address,
            'userZipCode': zipcode,
            'vendorDescription': vendordescription,
            'photoUrl': photourl
        };
        console.log('data:' + JSON.stringify(data));
        return this.http1.post<any>(this.url_updateUserInfo, JSON.stringify(data)).pipe(
            tap(body => console.log(body))
        );
        console.log(JSON.stringify(data));
    }

    // updatePassword(name: string, password: string): Observable<any> {
    //     let json4 = {
    //         'userName': name,
    //         'passWord': password
    //     };
    //     return this.http1.post<User>(this.url_updatePwd, JSON.stringify(json4)).pipe(
    //         tap(body => console.log(body))
    //     );
    // }

    getUserInfo() {

        return this.http1.post<any>(this.url_getUserInfo, null).pipe(
            tap(body => console.log(body))
        );
    }




    private requestFailed(err) {
        let msg = '请求发生异常';
        const status = err.status;
        console.log('status=' + status);
        if (status === 0) {
            msg = '请求失败，请求响应出错';
        } else if (status === 404) {
            msg = '请求失败，未找到请求地址';
        } else if (status === 500) {
            msg = '请求失败，服务器出错，请稍后再试';
        } else {
            msg = '未知错误，请检查网络';
        }
        return msg;
    }

    // private handleError<T> (operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //
    //         // TODO: send the error to remote logging infrastructure
    //         console.error(error); // log to console instead
    //
    //         // TODO: better job of transforming error for user consumption
    //         this.log(`${operation} failed: ${error.message}`);
    //
    //         // Let the app keep running by returning an empty result.
    //         return of(result as T);
    //     };
    // }
    // private log(message: string) {
    //     this.messageService.add(`HeroService: ${message}`);
    // }
    static getToken(): string {
        return window.localStorage.getItem('jwt');
    }

    /**
     * 将token信息保存到本地缓存中 用缓存的形式实现token验证
     * @param token
     */
    setToken(token) {
        // 目前只解析token字段，缓存先只存该字段
        //  + token.name + token.email + token.avatar + token.id + token.time
        // JSON.stringify(token)
        window.localStorage.setItem('jwt', token);
    }

    /**
     * 清理token
     */
    clearToken() {
        window.localStorage.setItem('jwt', null);
    }

    // decodeUserFromToken(token): User {
    //     return this.jwtHelperService.decodeToken(token).user;
    // }
    // setCurrentUser(decodedUser): void {
    //     this.loggedIn = true;
    //     this.user.email = decodedUser.email;
    //     this.user.phontUrl = decodedUser.photoUrl;
    //     this.currentUser.group = decodedUser.group;
    //     this.currentUser.role = decodedUser.role;
    //     this.isAdmin = decodedUser.role > 10;
    //     delete decodedUser.role;
    // }
}

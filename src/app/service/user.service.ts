import { Injectable } from '@angular/core';
import { Urls } from '../Model/model.url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { HttpService} from './http-service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url_register = Urls.register;
  private url_login = Urls.login;
  private url_getQuestion = Urls.getQuestion;
  private url_postAnswer = Urls.postAnswer;
  private url_postNewPwd = Urls.postNewPwd;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  constructor(private http: HttpService, private http1: HttpClient, private router : Router) { }


    // getUser (): Observable<User[]> {
    //     return this.http1.get<User[]>(this.urls)
    //         .pipe(
    //             tap(_ => this.log('fetched heroes')),
    //             catchError(this.handleError<User[]>('getUser', []))
    //         );
    // }
  //
  addUser (user: User): Observable<any> {
      return this.http1.post<User>(this.url_register, JSON.stringify(user), this.httpOptions).pipe(
          tap(body => console.log(body))
      );
  }

  login (email: string, password: string): Observable<any> {
      let json = {
          "userName": email,
          "passWord": password
      }
      console.log('++++' + JSON.stringify(json));
      // this.json_data.put("userName", email);
      // this.json_data.put
      return this.http1.post<any>(this.url_login, JSON.stringify(json), this.httpOptions).pipe(
          tap(body => console.log(body))
      );
  }

    // login(email: string, password: string) {
    //   return new Promise((resolve, reject => {
    //       this.http1.post(this.url_login, email, password)
    //   } ))
    // }

    getQuestion (name: string): Observable<any> {
        let json1 = {
            "userName": name
        };
        return this.http1.post<any>(this.url_getQuestion, JSON.stringify(json1), this.httpOptions).pipe(
            tap(body => console.log(body))
        );
    }

    postAnswer (name: string, question: string, answer: string): Observable<any> {
        let json2 = {
            "userName": name,
            "question": question,
            "answer": answer
        };
        return this.http1.post<any>(this.url_postAnswer, JSON.stringify(json2), this.httpOptions).pipe(
            tap(body => console.log(body))
        );
    }

    postNewPwd (name: string, password: string): Observable<any> {
        let json3 = {
            "userName": name,
            "passWord": password
        };
        return this.http1.post<any>(this.url_postNewPwd, JSON.stringify(json3), this.httpOptions).pipe(
            tap(body => console.log(body))
        );
    }
    // register(params: any) {
    //     let url1 = 'https://serve-me-java.herokuapp.com/auth/register';
    //     //显示等待样式
    //     this.http.showLoading('努力登录中...');
    //     return this.http.POST(url1, params, (res, error) => {
    //         this.http.hideLoading();
    //         if (error) {
    //             // 网络请求出现错误
    //             console.log('err=' + error);
    //         }
    //         if (res) {
    //             // 网络请求成功
    //             console.log('login success');
    //             if (res.success) {
    //                 // this.storage.write('userInfo', res.data);
    //                 //成功
    //                 //  this.navCtrl.navigateForward('/home',true,{queryParams:{name:'Tom'}});
    //                 this.router.navigate(['tabs']);
    //                 // this.router.navigate(['/home'],{queryParams:{name:'Tom'}});
    //             } else {
    //                 //失败
    //                 let msg = res.msg;
    //                 if (!msg) {
    //                     msg = '操作失败！';
    //                 }
    //                 console.log(msg);
    //             }
    //         }
    //     });
    // }

    // updateUser (user: User): Observable<any> {
    //     return this.http.put(this.urls, user, this.httpOptions).pipe(
    //         tap(_ => this.log(`updated hero id=${hero.id}`)),
    //         catchError(this.handleError<any>('updateHero'))
    //     );
    // }

    // updatePassword () : Observable<any> {
    //     return this.http1.post<User>(this.url_register, ).pipe(
    //         tap(body => console.log(body))
    //     );
    // }

    // getBillTypes() {
    //     console.log(this.urls.GetBillTypes);
    //     const data = this.http.get(this.urls.GetBillTypes)      .toPromise()      .then(response => console.log(response));
    //     console.log(data);
    // }

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
}

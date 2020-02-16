import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../user';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    email: string = '';
    password: string = '';
    errorMsg: string = '';

    constructor(private router: Router, private http: HttpClient, private userService: UserService) { }

    ngOnInit() {
    }
    // login1(username: string): Observable<any> {
    //     this.userService.login({
    //         email: '123456@qq.com',
    //         password: '123456',
    //     });
    //     this.router.navigate(['tabs']);
    // }
    register() {
        this.router.navigate(['register']);
    }

    onBlur() {
        if (this.email.length <= 0) {
            this.errorMsg = 'email can not be empty！';
        } else if (this.password.length <= 0) {
            this.errorMsg = 'password can not be empty！';
        }
    }

    login() {
        this.router.navigate(['tabs']);
    }

}

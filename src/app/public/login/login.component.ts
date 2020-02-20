import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import {Observable} from 'rxjs';
import {UserService} from '../../service/user.service';
import { ToastController } from '@ionic/angular';
import { Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    passwordType: string = 'password';
    passwordIcon: string = 'eye-off';

    userName: string ;
    passWord: string ;
    errorMsg: string ;
    role: string;

    constructor(private router: Router, public toastController: ToastController, private http: HttpClient, private userService: UserService) { }

    ngOnInit() {
    }
    // login1(username: string): Observable<any> {
    //     this.userService.login({
    //         email: '123456@qq.com',
    //         password: '123456',
    //     });
    //     this.router.navigate(['tabs']);
    // }

    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

    register() {
        this.router.navigate(['register']);
    }

    // onBlur() {
    //     if (this.userName.length <= 0) {
    //         this.errorMsg = 'email can not be empty！';
    //     } else if (this.passWord.length <= 0) {
    //         this.errorMsg = 'password can not be empty！';
    //     }
    // }

    async toast_err() {
        const toast = await this.toastController.create({
            message: 'Invalid user name or password!',
            duration: 2000
        });
        await toast.present();
    }
    async toast_succ() {
        const toast = await this.toastController.create({
            message: 'Successful!',
            duration: 2000
        });
        await toast.present();
    }

    login() {
        this.userService.login(this.userName, this.passWord).subscribe(res => {
            //console.log('---->' + res.result[1]);
            console.log('Json' + JSON.stringify(res.result[1]));
            const json = JSON.stringify(res.result[1]);

            for(const item in JSON.parse(json)){
                console.log();
                 if(item == "authorities"){
                     const authority= JSON.parse(json)[item];
                     console.log('====>' + authority[authority]);
                     for(const key of Object.keys(authority)) {
                         if(authority.hasOwnProperty(key)) {
                             const role = authority[key];
                             console.log(role.authority);
                             this.role = role.authority;
                         }
                     }
                 }
            }

            if(res == 'User not Exist!') {
               this.toast_err();
            }
            else{
                if(this.role == 'c'){
                    this.router.navigate(['tabs']);
                    this.toast_succ();
                }
                else if(this.role == 'v'){
                    this.router.navigate(['tabs-vendor']);
                    this.toast_succ();
                }
                else{
                    this.toast_err();
                }

            }
        },
            err => {
                console.log(err);
                this.requestFailed(err);
                this.toast_err();
            });
    }

    private requestFailed(err) {
        let msg = '请求发生异常';
        const status = err.status;
        console.log('status=' + status);
        if (status === 0) {
            msg = 'Request failed, request response error';
        } else if (status === 404) {
            msg = 'Request failed, requested address not found';
        } else if (status === 500) {
            msg = 'Request failed with server error, please try again later';
        } else {
            msg = 'Invalid user name or password';
        }
        return msg;
    }

}

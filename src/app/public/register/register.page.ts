import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import {UserService} from '../../service/user.service';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    user: User;
    firstName = '';
    lastName = '';
    email = '';
    password = '';
    phoneNumber = '';
    flag: boolean;
    pwdMsg = '';
    nameMsg = '';

    constructor(private userService: UserService, public toastController: ToastController) {
        this.flag = false;
    }

    ngOnInit() {
    }

    async toast_empty() {
        const toast = await this.toastController.create({
            message: 'Empty !',
            duration: 2000
        });
        await toast.present();
    }
    async toast_length() {
        const toast = await this.toastController.create({
            message: 'Too Long !',
            duration: 2000
        });
        await toast.present();
    }
    async toast_check() {
        const toast = await this.toastController.create({
            message: 'Invalid !',
            duration: 2000
        });
        await toast.present();
    }
    change() {
        this.flag = !this.flag;
        // console.log('FFFF' + this.flag);
    }

    onChange(type: number) {
        if (type == 1) {
            // 用户名校验
            const nameReg = /^[a-zA-Z0-9_-]{0,}$/;
            if (!nameReg.test(this.firstName)) {
               this.toast_check();
            } else if (this.firstName.length > 15) {
                this.toast_length();
            } else if (this.firstName.length <= 0) {
                this.toast_empty();
            } else {
                this.nameMsg = '';
            }
        } else if (type == 2) {
            const nameReg2 = /^[a-zA-Z0-9_-]{0,}$/;
            if (!nameReg2.test(this.lastName)) {
                this.toast_check();
            } else if (this.lastName.length <= 0) {
                this.toast_empty();
            } else if (this.lastName.length > 15) {
                this.toast_length();
            } else {
                this.nameMsg = '';
            }
        } else if (type == 3) {
            // 密码校验
            // 包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
            // let pwdReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
            // 6-20个字母、数字、下划线

            if (this.password.length < 6 || this.password.length > 20) {
                this.toast_check();
            } else {
                this.pwdMsg = '';
            }
        }
        // this.errorMsg = this.nameMsg.length <= 0 ? this.pwdMsg : this.nameMsg;
    }
    // 失去焦点 【(ionFocus)="onFocus()"获取焦点时的事件】
    onBlur() {
        if (this.firstName.length <= 0) {
            this.toast_empty();
        } else if (this.lastName.length <= 0) {
            this.toast_empty();
        } else if (this.password.length <= 0) {
            this.toast_empty();
        } else if (this.email.length <= 0) {
            this.toast_empty();
        } else if (this.phoneNumber.length <= 0) {
            this.toast_empty();
        }
    }
    submit(user: User): void {
        // if (!user.firstName || !user.lastName || !user.phoneNumber || !user.email) { alert('Incomplete information'); }
        // this.userService.addUser({ user } as User)
        //     .subscribe(user => {
        //         this.push(user);
        //     });
    }

}

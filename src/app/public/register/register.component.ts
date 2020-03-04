import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/user';
import { ToastController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../service/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    passwordType = 'password';
    passwordIcon = 'eye-off';

    customActionSheetOptions: any = {
        header: 'Questions:',
        subHeader: 'Please select your question:'
    };

  user: User = {
    userName: '',
    passWord: '',
    phone: '',
    email: '',
    userDetailAddress: '',
      userCity: '',
      userState: '',
      userZipCode: '',
      question: '',
      answer: '',
    role: 'c',
    type: [],
      vendorDescription: '',
      photoUrl: '',
};


    flag: boolean;
    pwdMsg = '';
    nameMsg = '';
    public langSelect = 'c';
    public t = 'Appliances';
    type = '';
    questions = [
        {q : 'Where is your birthplace ？'},
        {q : 'when is your birthday ？'},
        {q : 'What\'s your mother\'s first name ?'},
        {q : 'What\'s your father\'s first name ?'},
        {q : 'What\'s your first pet\'s name ?'},
        {q : 'What is your favorite music ？'}
    ];
    types = [
        {type : 'Appliances'},
        {type : 'Electrical'},
        {type : 'Plumbing'},
        {type : 'Home Cleaning'},
        {type : 'Tutoring'},
        {type : 'Packaging and Moving'},
        {type : 'Computer Repair'},
        {type : 'Home Repair and Painting'},
        {type : 'Pest Control'}

    ];

  constructor(private userService: UserService, public toastController: ToastController, private router: Router) {
      this.flag = false;
  }

  ngOnInit() {}

    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
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
            message: 'Invalid Information!',
            duration: 2000
        });
        await toast.present();
    }

    async toast_succ() {
        const toast = await this.toastController.create({
            message: 'Successful Registration!',
            duration: 3000
        });
        await toast.present();
    }

    // async toast_err() {
    //     const toast = await this.toastController.create({
    //         message: 'Invalid information !',
    //         duration: 3000
    //     });
    //     await toast.present();
    // }
    change(e) {
        this.flag = !this.flag;
        console.log(this.langSelect);
        this.user.role = this.langSelect;
    }

    onChange(type: number) {
        // console.log(this.user.firstName)
        if (type == 1) {
            // 用户名校验
            const nameReg = /^[a-zA-Z0-9_-]{0,}$/;
            if (!nameReg.test(this.user.userName)) {
                this.toast_check();
            } else if (this.user.userName.length > 15) {
                this.toast_length();
            } else if (this.user.userName.length <= 0) {
                this.toast_empty();
            } else {
                this.nameMsg = '';
            }
        } else if (type == 2) {
            // 密码校验
            // 包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
            // let pwdReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
            // 6-20个字母、数字、下划线

            if (this.user.passWord.length > 15) {
                this.toast_length();
            } else if (this.user.userName.length <= 0) {
                this.toast_empty();
            } else {
                this.nameMsg = '';
            }
        }

    }

    // onBlur() {
    //     if (this.user.userName.length <= 0) {
    //         this.toast_empty();
    //     } else if (this.user.passWord.length <= 0) {
    //         this.toast_empty();
    //     } else if (this.user.email.length <= 0) {
    //         this.toast_empty();
    //     } else if (this.user.phone.length <= 0) {
    //         this.toast_empty();
    //     }
    // }

    submit(user: User): void {
      const emailCheck = /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/;
      console.log('====' + JSON.stringify(user));
      // if(!emailCheck.test(this.user.email)){
      //      this.toast_check();
      // }
      this.userService.addUser(user)
            .subscribe(user => {
                console.log(user);
                this.toast_succ();
                this.router.navigate(['login']);
            },
                err => {
                    console.log(err);
                    this.requestFailed(err);
                    this.toast_check();
                });

    }
    // submit(user : User) : void {
    //     this.userService.register({user});
    // }

    // change1(index){
    //   console.log(index);
    // }
    change1(index, value) {
      console.log(index, value);
      this.user.type = value;
    }

    change2(index) {
        console.log(index.detail.value.q);
        this.user.question = index.detail.value.q;

    }

    change3(index) {
      console.log('-------' + index.detail.value);
      this.user.type = index.detail.value;
      console.log('------->>' + this.user.type);
      // this.user.type.join(index.detail.value);
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
            msg = 'Invalid Information';
        }
        return msg;
    }
  }

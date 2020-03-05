import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {User} from '../Model/user';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    user: User;
    username: string;
    phone: string;
    email: string;
    state: string;
    city: string;
    address: string;
    zipcode: string;
    authorities: string;
    Result: string;
    type: string;
    vendordescription: string;
    photourl: string;
    token: string;
    password: string;
    constructor(private userService: UserService, private router: Router, private toastController: ToastController
    ) {
        this.userService.getUserInfo().subscribe(res => {

            // console.log('getUserInfo' + JSON.stringify(res));
            this.Result = JSON.stringify(res);
            console.log('Result' + this.Result);
            this.username = res.result['username'];
            this.email = res.result['email'];
            this.state = res.result['userState'];
            this.city = res.result['userCity'];
            this.address = res.result['userDetailAddress'];
            this.zipcode = res.result['userZipCode'];
            this.phone = res.result['phone'];
            this.type = res.result['type']
            this.vendordescription = res.result['vendorDescription']
            this.photourl = res.result['photoUrl'];
            this.authorities = res.result['authorities'][0]['authority'];
            this.token = window.localStorage.getItem('jwt');


        });
    }

    ngOnInit() {
        this.user = this.userService.user;
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

    async toast_succ() {
        const toast = await this.toastController.create({
            message: 'Successful !',
            duration: 2000
        });
        await toast.present();
    }
    async toast_err() {
        const toast = await this.toastController.create({
            message: 'Invalid Infomation !',
            duration: 2000
        });
        await toast.present();
    }

    submit() {
        this.userService.updateUserIfo(this.phone, this.type, this.state, this.city, this.address, this.zipcode, this.vendordescription , this.photourl).subscribe(res => {
                console.log();
                this.toast_succ();
                },
            err => {
                console.log(err);
                this.toast_err();
            });


        this.userService.postNewPwd(this.username,this.password).subscribe(res => {
                console.log(res);
                this.toast_succ();
            },
            err => {
                console.log(err);
                this.toast_err();
            });
        this.router.navigate(['tabs'])

    }

    clearToken() {
        window.localStorage.setItem('jwt', null);
    }
    onChange(type: number) {
        // console.log(this.user.firstName)
        if (type == 1) {
            if (this.phone.length > 15) {
                this.toast_length();
            } else if (this.phone.length <= 0) {
                this.toast_empty();
            } else {
                console.log('type');
            }

        } else if (type == 2) {

            if (this.password.length > 15) {
                this.toast_length();
            } else if (this.user.userName.length <= 0) {
                this.toast_empty();
            } else {
                console.log('type');
            }
        }

    }

}

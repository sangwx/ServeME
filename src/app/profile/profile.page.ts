import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {User} from '../Model/user';

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
    constructor(private userService: UserService
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

            // console.log('name:' + this.username);
            console.log('phone' + this.phone);
            // console.log('email:' + this.email);
            console.log('state:' + this.state);
            console.log('city:' + this.city);
            console.log('address:' + this.address);
            console.log('zipcode:' + this.zipcode);
            // console.log('authority:' + this.authorities);
            // console.log('token:' + this.token);
            console.log('type:' + this.type);
            console.log('photourl:' + this.photourl);
            console.log('vendordescription:' + this.vendordescription);
        });
    }

    ngOnInit() {
        this.user = this.userService.user;
    }

    submit() {
        this.userService.updateUserIfo(this.phone, this.type, this.state, this.city, this.address, this.zipcode, this.vendordescription , this.photourl).subscribe(res => {
            console.log();
        } );
        console.log('update!');

        this.userService.postNewPwd(this.username,this.password).subscribe(res => {
            console.log(res);
        });
    }

    clearToken() {
        window.localStorage.setItem('jwt', null);
    }


}

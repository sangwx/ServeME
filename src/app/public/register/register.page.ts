import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    customer: Customer = {
        firstName: ' ',
        lastName: ' ',
        password: ' ',
        phoneNumber: 666,
        email: ' ',
        address: ' ',
        identity: ' ',
    };

    flag: boolean;

    constructor() {
        this.flag = false;
    }

    ngOnInit() {
    }
    change() {
        this.flag = !this.flag;
        console.log('FFFF' + this.flag);
    }
    register() {
    }

}

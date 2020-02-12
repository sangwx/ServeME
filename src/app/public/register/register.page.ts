import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    flag: boolean;

    constructor() {
        this.flag = false;
    }

    ngOnInit() {
    }
    changeT() {
        this.flag = true;
        console.log('TTTT' + this.flag);
    }
    changeF() {
        this.flag = !this.flag;
        console.log('FFFF' + this.flag);
    }

}

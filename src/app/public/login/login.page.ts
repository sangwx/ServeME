import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService} from '../../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }
    login() {
        this.router.navigate(['tabs']);
    }
    register() {
        this.router.navigate(['register']);
    }

}

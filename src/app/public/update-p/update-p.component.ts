import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
import { UserService} from '../../service/user.service';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-update-p',
  templateUrl: './update-p.component.html',
  styleUrls: ['./update-p.component.scss'],
})
export class UpdatePComponent implements OnInit {
    public name: string;
    passWord: string;

    passwordType: string = 'password';
    passwordIcon: string = 'eye-off';

  constructor(public activeRoute: ActivatedRoute, private userService : UserService, private router: Router, private toastController: ToastController) {
      this.activeRoute.queryParams.subscribe((params: Params) => {
          this.name = params['name'];
          console.log('name:' + this.name);
      });
  }

  ngOnInit() {}

    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

    async toast_err() {
        const toast = await this.toastController.create({
            message: 'Invalid password!',
            duration: 2000
        });
        await toast.present();
    }

    submit(){
        console.log(this.passWord);
        this.userService.postNewPwd(this.name, this.passWord).subscribe(response => {
            console.log('res' + response.result);
            if(response.result == "password has been updated"){
                 this.router.navigate(['login'])
            }
        },
        err => {
            console.log(err);
            this.toast_err();
        });
    }

}

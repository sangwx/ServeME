import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/user';
import { ToastController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Params, Router} from '@angular/router';



@Component({
  selector: 'app-forget-p',
  templateUrl: './forget-p.component.html',
  styleUrls: ['./forget-p.component.scss'],
})
export class ForgetPComponent implements OnInit {

  userName : string;
  question : string;
  answer : string;

  constructor(private userService: UserService, public toastController: ToastController,
              private router: Router, public activeRoute: ActivatedRoute) {
      this.activeRoute.queryParams.subscribe((params: Params) => {
          this.userName = params['name'];
          console.log('name:' + this.userName);
      });

  }

  ngOnInit() {

  }

    async toast_err() {
        const toast = await this.toastController.create({
            message: 'Invalid Answer !',
            duration: 2000
        });
        await toast.present();
    }

  onChange(){
      this.userService.getQuestion(this.userName).subscribe( res => {

          //console.log(res.result);
          this.question = res.result;
      })
  }
    change(index){
        //console.log(index.detail.value.q);
        this.question = index.detail.value.q;

    }

    submit(): void {
        this.userService.postAnswer(this.userName, this.question, this.answer)
            .subscribe( answer => {
                console.log(answer.result);
                if(answer.result == 'Success'){
                    this.router.navigate(['update'], {
                        queryParams: {
                            name: this.userName
                        }
                    });
                }
                else {
                    console.log('error');
                    this.toast_err();
                }

            },
                err => {
                console.log(err);
                this.toast_err();
                });
    }

    getQ(){
        this.userService.getQuestion(this.userName).subscribe( res => {
            console.log(res);
            this.question = res;
        })
    }

}

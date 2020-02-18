import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
    public isToggled1: boolean;
    public isToggled2: boolean;
    public isToggled3: boolean;
    public isToggled4: boolean;

  constructor(public toastController: ToastController) {
      this.isToggled1 = true;
      this.isToggled2 = true;
      this.isToggled3 = true;
      this.isToggled4 = true;
  }

  ngOnInit() {
  }

    async toast_open() {
        const toast = await this.toastController.create({
            message: 'open successfully !',
            duration: 2000
        });
        await toast.present();
    }

    async toast_close() {
        const toast = await this.toastController.create({
            message: 'close successfully !',
            duration: 2000
        });
        await toast.present();
    }

    public toggleFun1() {
        console.log("Toggled: "+ this.isToggled1);
        if(this.isToggled1 == true){
          this.toast_open();
        }
        else {
          this.toast_close();
        }
    }
    public toggleFun2() {
        console.log("Toggled: "+ this.isToggled2);
        if(this.isToggled2 == true){
            this.toast_open();
        }
        else {
            this.toast_close();
        }
    }

    public toggleFun3() {
        console.log("Toggled: "+ this.isToggled3);
        if(this.isToggled3 == true){
            this.toast_open();
        }
        else {
            this.toast_close();
        }
    }

    public toggleFun4() {
        console.log("Toggled: "+ this.isToggled4);
        if(this.isToggled4 == true){
            this.toast_open();
        }
        else {
            this.toast_close();
        }
    }

}

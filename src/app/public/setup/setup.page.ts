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

    async toast_open1() {
        const toast = await this.toastController.create({
            message: 'Sound opened successfully !',
            duration: 2000
        });
        await toast.present();
    }

    async toast_close1() {
        const toast = await this.toastController.create({
            message: 'Sound closed successfully !',
            duration: 2000
        });
        await toast.present();
    }

    async toast_open2() {
        const toast = await this.toastController.create({
            message: 'BlueTooth opened successfully !',
            duration: 2000
        });
        await toast.present();
    }

    async toast_close2() {
        const toast = await this.toastController.create({
            message: 'BlueTooth closed successfully !',
            duration: 2000
        });
        await toast.present();
    }

    async toast_open3() {
        const toast = await this.toastController.create({
            message: 'Location opened successfully !',
            duration: 2000
        });
        await toast.present();
    }

    async toast_close3() {
        const toast = await this.toastController.create({
            message: 'Location closed successfully !',
            duration: 2000
        });
        await toast.present();
    }

    async toast_open4() {
        const toast = await this.toastController.create({
            message: 'Notification opened successfully !',
            duration: 2000
        });
        await toast.present();
    }

    async toast_close4() {
        const toast = await this.toastController.create({
            message: 'Notification closed successfully !',
            duration: 2000
        });
        await toast.present();
    }

    public toggleFun1() {
        console.log("Toggled: "+ this.isToggled1);
        if(this.isToggled1 == true){
          this.toast_open1();
        }
        else {
          this.toast_close1();
        }
    }
    public toggleFun2() {
        console.log("Toggled: "+ this.isToggled2);
        if(this.isToggled2 == true){
            this.toast_open2();
        }
        else {
            this.toast_close2();
        }
    }

    public toggleFun3() {
        console.log("Toggled: "+ this.isToggled3);
        if(this.isToggled3 == true){
            this.toast_open3();
        }
        else {
            this.toast_close3();
        }
    }

    public toggleFun4() {
        console.log("Toggled: "+ this.isToggled4);
        if(this.isToggled4 == true){
            this.toast_open4();
        }
        else {
            this.toast_close4();
        }
    }

}
